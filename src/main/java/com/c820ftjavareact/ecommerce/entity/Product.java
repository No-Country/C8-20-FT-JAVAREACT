package com.c820ftjavareact.ecommerce.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Table(name = "product")
@Getter
@Setter
@Entity /*
@SQLDelete(sql = "UPDATE product SET deleted = true WHERE id=?")
@Where(clause = "deleted = false") */
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String description;

    @NotNull
    private double price;

    @NotNull
 //   private String imageUrl;

    private String note;
    private Integer stock; //add- stock

    @JsonBackReference
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Image> images = new HashSet<>();
}