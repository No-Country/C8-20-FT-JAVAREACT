package com.c820ftjavareact.ecommerce.service;

import com.c820ftjavareact.ecommerce.dto.ProductDTO;
import org.springframework.data.crossstore.ChangeSetPersister;

public interface ProductService {
    ProductDTO createProduct (ProductDTO dto);

    ProductDTO updateProduct(ProductDTO productDTO, Long id);

    /*void deleteProduct(Long id); /* throws ChangeSetPersister.NotFoundException; */

}
