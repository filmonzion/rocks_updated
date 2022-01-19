package com.products.products.repositories;

import com.products.products.entities.Items;
import org.springframework.data.repository.CrudRepository;

public interface ItemsRepository extends CrudRepository<Items, Integer> {
}
