package com.products.products.service;

import com.products.products.entities.Items;

import java.util.List;

public interface ItemsService {
    Items save(Items items);

    void delete(int itemID);

    List<Items> all();

    Items findById(int itemID);
}
