package com.products.products.controllers;

import com.products.products.controllers.dto.ItemsDto;
import com.products.products.entities.Items;
import com.products.products.repositories.ItemsRepository;
import com.products.products.service.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ItemsController {
    @Autowired
    private final ItemsRepository itemsRepository;

    public ItemsController(ItemsRepository itemsRepository){
        this.itemsRepository = itemsRepository;
    }


//    final ItemsService itemsService;
//
//    public ItemsController(@Autowired ItemsService itemsService){
//        this.itemsService = itemsService;
//    }

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

    @PutMapping("/{id}")
    public Items updateItems(@PathVariable Integer id, @RequestBody Items items){
        Optional<Items> itemsToUpdateOptional = itemsRepository.findById(id);

        if(itemsToUpdateOptional.isEmpty()){
            return null;
        }
        Items itemsToUpdate = itemsToUpdateOptional.get();

        if(items.getItemName() != null){
            itemsToUpdate.setItemName(items.getItemName());
        }
        if(items.getItemDescription() != null){
            itemsToUpdate.setItemDescription(items.getItemDescription());
        }
        if(items.getItemPrice() != null){
            itemsToUpdate.setItemPrice(items.getItemPrice());
        }
        if(items.getItemQuantity() != null){
            itemsToUpdate.setItemQuantity(items.getItemQuantity());
        }
        if(items.getImageUrl() != null){
            itemsToUpdate.setImageUrl(items.getImageUrl());
        }
        return itemsRepository.save(itemsToUpdate);

    }



//    @GetMapping
//    public Iterable<Items> getAllItems(){
//        return itemsService.all();
//    }
//    //Post mapping to ItemsDto
//    @PostMapping
//    public Items saveItems(@RequestBody ItemsDto itemsDto){
//        return itemsService.save(new Items(itemsDto));
//    }
}
