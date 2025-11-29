package com.example.bonjour21.controller;

import com.example.bonjour21.entity.Product;
import com.example.bonjour21.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductContoller {
    private ProductRepository productRepository;

    public ProductContoller(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("products")
    public List<Product> getallproduct(){
        List<Product> products=this.productRepository.findAll();
        return products;
    }
    @GetMapping("/products/{name}")
    public Product getproductbyname(@PathVariable  String name){
        Product produit= this.productRepository.findByName(name);
        return produit;
    }
    @PostMapping
    public Product createproduct(@RequestBody Product p){
        Product pr=this.productRepository.save(p);
        return pr;
    }
}
