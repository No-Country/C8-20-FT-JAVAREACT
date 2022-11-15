package com.c820ftjavareact.ecommerce.service;


import com.c820ftjavareact.ecommerce.dto.ClientDTORegister;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ClientService {

    List<ClientDTORegister> getClientListRegisters();

    ClientDTORegister getClientById(int id);

    List<ClientDTORegister> getClient();

    ClientDTORegister updateClient(ClientDTORegister dto , int id) throws NotFoundException;

    void deleteClient(int id) throws NotFoundException;

    ClientDTORegister createClient(ClientDTORegister ClientDTO);

}
