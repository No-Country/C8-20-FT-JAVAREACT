package com.c820ftjavareact.ecommerce.controller;


import com.c820ftjavareact.ecommerce.dto.ClientDTORegister;
import com.c820ftjavareact.ecommerce.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    private ClientService clientSevice;

    @GetMapping(value = "/clients")
    public ResponseEntity<List<ClientDTORegister>> getClient(){
        List<ClientDTORegister> clientDTORegisters = clientSevice.getClientListRegisters();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(clientDTORegisters);
    }
}
