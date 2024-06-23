package org.workspace.restaurantbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.workspace.restaurantbackend.model.CartItem;
import org.workspace.restaurantbackend.model.Customer;
import org.workspace.restaurantbackend.model.FoodItem;
import org.workspace.restaurantbackend.repository.CartItemRepository;
import org.workspace.restaurantbackend.repository.CustomerRepository;
import org.workspace.restaurantbackend.repository.FoodItemRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/cart")
public class CartItemController {

    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private FoodItemRepository foodItemRepository;

    @GetMapping("/getCartItems")
    public ResponseEntity<?> getCartItemsForUser(@RequestParam Long userId) {
        try {
            Optional<Customer> customerOptional = customerRepository.findById(userId);
            if (!customerOptional.isPresent()) {
                return ResponseEntity.badRequest().body("Customer not found");
            }

            List<CartItem> cartItems = cartItemRepository.findByCustomer(customerOptional.get());
            return ResponseEntity.ok(cartItems);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An internal server error occurred");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addItemToCart(@RequestBody CartItem cartItem) {
        try {
            // Extract customer and food item IDs from the request
            Long customerId = cartItem.getCustomer().getId();
            Long foodItemId = cartItem.getFoodItem().getId();

            // Find customer and food item by IDs
            Optional<Customer> customerOptional = customerRepository.findById(customerId);
            Optional<FoodItem> foodItemOptional = foodItemRepository.findById(foodItemId);

            // Validate the existence of customer and food item
            if (!customerOptional.isPresent()) {
                return ResponseEntity.badRequest().body("Customer not found");
            }

            if (!foodItemOptional.isPresent()) {
                return ResponseEntity.badRequest().body("Food item not found");
            }

            // Set customer and food item to the cart item
            cartItem.setCustomer(customerOptional.get());
            cartItem.setFoodItem(foodItemOptional.get());

            // Save and return the cart item
            CartItem savedCartItem = cartItemRepository.save(cartItem);
            return ResponseEntity.ok(savedCartItem);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An internal server error occurred");
        }
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateCartItem(@RequestBody CartItem cartItem) {
        try {
            // Extract customer and food item IDs from the request
            Long customerId = cartItem.getCustomer().getId();
            Long foodItemId = cartItem.getFoodItem().getId();

            // Find customer and food item by IDs
            Optional<Customer> customerOptional = customerRepository.findById(customerId);
            Optional<FoodItem> foodItemOptional = foodItemRepository.findById(foodItemId);

            // Validate the existence of customer and food item
            if (!customerOptional.isPresent()) {
                return ResponseEntity.badRequest().body("Customer not found");
            }

            if (!foodItemOptional.isPresent()) {
                return ResponseEntity.badRequest().body("Food item not found");
            }

            // Set customer and food item to the cart item
            cartItem.setCustomer(customerOptional.get());
            cartItem.setFoodItem(foodItemOptional.get());

            // Update the quantity of the existing cart item
            Optional<CartItem> existingCartItemOptional = cartItemRepository.findByCustomerAndFoodItem(customerOptional.get(), foodItemOptional.get());
            if (existingCartItemOptional.isPresent()) {
                CartItem existingCartItem = existingCartItemOptional.get();
                existingCartItem.setQuantity(cartItem.getQuantity());

                // If quantity is zero, delete the cart item
                if (cartItem.getQuantity() == 0) {
                    cartItemRepository.delete(existingCartItem);
                    return ResponseEntity.ok("Cart item deleted successfully");
                }

                CartItem updatedCartItem = cartItemRepository.save(existingCartItem);
                return ResponseEntity.ok(updatedCartItem);
            } else {
                return ResponseEntity.badRequest().body("Cart item not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An internal server error occurred");
        }
    }

}
