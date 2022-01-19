package com.products.products.service;

import com.products.products.entities.Items;
import com.products.products.repositories.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

@Service
public class ItemsServiceMySQL implements ItemsService {
    private final ItemsRepository itemsRepository;

    public ItemsServiceMySQL(@Autowired ItemsRepository itemsRepository){
        this.itemsRepository = itemsRepository;
    }

    @Override
    public Items save(Items items) {
        return itemsRepository.save(items);
    }
    @Override
    public void delete(int itemID){
        itemsRepository.deleteById(itemID);
    }

    @Override
    public List<Items> all(){
        List<Items> itemsResult = new ArrayList<>();
        itemsRepository.findAll().forEach(itemsResult::add);
        return itemsResult;
    }

    @Override
    public Items findById(int itemID){
        return null;
    }
}
