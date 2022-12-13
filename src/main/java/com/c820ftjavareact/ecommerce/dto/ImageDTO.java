package com.c820ftjavareact.ecommerce.dto;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageDTO {
    private int id;
   
    private String name;
    @NotNull
    private String imagenUrl;
    private String imagenId;
}
