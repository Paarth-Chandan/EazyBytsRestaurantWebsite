package org.workspace.restaurantbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.workspace.restaurantbackend.model.CartItem;
import org.workspace.restaurantbackend.model.Customer;
import org.workspace.restaurantbackend.model.FoodItem;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository  extends JpaRepository<CartItem, Long> {
    Optional<CartItem> findByCustomerAndFoodItem(Customer customer, FoodItem foodItem);

    List<CartItem> findByCustomer(Customer customer);
}