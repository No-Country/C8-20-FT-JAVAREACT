package com.c820ftjavareact.ecommerce.mapper;

import com.c820ftjavareact.ecommerce.dto.ProductDTO;
import com.c820ftjavareact.ecommerce.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {
    public Product productDTO2Entity (ProductDTO productDTO){
        Product product = new Product();
        product.setTitle(productDTO.getTitle());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setImageUrl(productDTO.getImageUrl());
        product.setNote(productDTO.getNote());
      //  product.setStock(productDTO.getStock());
        return product;
    }

    public ProductDTO productEntity2DTO (Product  product){
        ProductDTO productDTO = new ProductDTO();
        productDTO.setTitle(product.getTitle());
        productDTO.setDescription(product.getDescription());
        productDTO.setPrice(product.getPrice());
        productDTO.setImageUrl(product.getImageUrl());
        productDTO.setNote(product.getNote());
     //   productDTO.setStock(product.getStock());

        return  productDTO;
    }
}
