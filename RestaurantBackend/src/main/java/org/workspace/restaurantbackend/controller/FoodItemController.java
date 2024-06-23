package org.workspace.restaurantbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.workspace.restaurantbackend.model.FoodItem;
import org.workspace.restaurantbackend.repository.FoodItemRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/fooditems")
public class FoodItemController {

    @Autowired
    private FoodItemRepository foodItemRepository;

    @GetMapping
    public ResponseEntity<List<FoodItem>> getAllFoodItems() {
        List<FoodItem> foodItems = new ArrayList<>();
        foodItemRepository.findAll().forEach(foodItems::add);
        return ResponseEntity.ok(foodItems);
    }
}
