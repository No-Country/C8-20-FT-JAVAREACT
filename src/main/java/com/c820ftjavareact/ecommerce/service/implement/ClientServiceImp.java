package com.c820ftjavareact.ecommerce.service.implement;

import com.c820ftjavareact.ecommerce.dto.ClientDTORegister;
import com.c820ftjavareact.ecommerce.entity.Client;
import com.c820ftjavareact.ecommerce.mapper.ClientMapper;
import com.c820ftjavareact.ecommerce.repository.ClientRepository;
import com.c820ftjavareact.ecommerce.service.ClientService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImp implements ClientService {

    @Autowired
    private ClientMapper clientMapper;

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public List<ClientDTORegister> getClientListRegisters(){
        List<Client> clients = clientRepository.findAll();
       List<ClientDTORegister> clientDTORegisters = clientMapper.clientDTORegisterList(clients);
       return  clientDTORegisters;
    }


    @Override
    public ClientDTORegister getClientById(int id) {
        return null;
    }

    @Override
    public List<ClientDTORegister> getClient() {

        return null;
    }

    @Override
    public ClientDTORegister updateClient(ClientDTORegister dto, int id) throws NotFoundException {
        return null;
    }

    @Override
    public void deleteClient(int id) throws NotFoundException {

    }

    @Override
    public ClientDTORegister createClient(ClientDTORegister ClientDTO) {
        return null;
    }
}
