package com.products.products.controllers;

import com.products.products.entities.Items;
import com.products.products.repositories.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ItemsController {
    @Autowired
    private final ItemsRepository itemsRepository;

    public ItemsController(ItemsRepository itemsRepository){
        this.itemsRepository = itemsRepository;
    }

    //Get mapping
    @GetMapping
    public Iterable<Items> getAllItems(){
        return itemsRepository.findAll();
    }

    //Post mapping
    @PostMapping
    public Items addItems(@RequestBody Items items){
        return itemsRepository.save(items);
    }
}
