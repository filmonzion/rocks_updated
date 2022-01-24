package com.products.products.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TemplateController {
    @GetMapping("/home.html")
    public String home(){
        return "home";
    }
    @GetMapping("/product.html")
    public String product(){
        return "product";
    }
    @GetMapping("/about.html")
    public String about(){
        return "about";
    }
    @GetMapping("/product-form.html")
    public String productForm(){
        return "product-form";
    }
}
