package com.c820ftjavareact.ecommerce.controller;
import com.c820ftjavareact.ecommerce.dto.ProductDTO;
import com.c820ftjavareact.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<ProductDTO> create(@RequestBody ProductDTO productDTO) {
        productService.createProduct(productDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(productDTO);
    }
    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> update(@PathVariable Long id,@RequestBody ProductDTO productDTO) {
        try{
            ProductDTO productDTO1 = productService.updateProduct(productDTO,id);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(productDTO1);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    /*
    @DeleteMapping("/{id}")
    public ResponseEntity<Long> deleteProduct(@PathVariable(name = "id") long id) {
        ProductService.deleteProduct(id);
        return new ResponseEntity<>("Product eliminado con exito", HttpStatus.OK);
    } */
}
