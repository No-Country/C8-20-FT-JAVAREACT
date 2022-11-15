package com.c820ftjavareact.ecommerce.repository;

import com.c820ftjavareact.ecommerce.entity.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClientRepository  extends JpaRepository<Client, String> {

        List<Client> findAll();

}
