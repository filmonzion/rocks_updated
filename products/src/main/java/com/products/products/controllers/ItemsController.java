package com.products.products.controllers;

import com.products.products.controllers.dto.ItemsDto;
import com.products.products.entities.Items;
import com.products.products.repositories.ItemsRepository;
import com.products.products.service.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ItemsController {
//    @Autowired
//    private final ItemsRepository itemsRepository;
//
//    public ItemsController(ItemsRepository itemsRepository){
//        this.itemsRepository = itemsRepository;
//    }


    final ItemsService itemsService;

    public ItemsController(@Autowired ItemsService itemsService){
        this.itemsService = itemsService;
    }

    //Get mapping
//    @GetMapping
//    public Iterable<Items> getAllItems(){
//        return itemsRepository.findAll();
//    }
//
//    //Post mapping
//    @PostMapping
//    public Items addItems(@RequestBody Items items){
//        return itemsRepository.save(items);
//    }



    @GetMapping
    public Iterable<Items> getAllItems(){
        return itemsService.all();
    }
    //Post mapping to ItemsDto
    @PostMapping
    public Items saveItems(@RequestBody ItemsDto itemsDto){
        return itemsService.save(new Items(itemsDto));
    }
}
