package org.workspace.restaurantbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.workspace.restaurantbackend.model.Customer;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);
}
