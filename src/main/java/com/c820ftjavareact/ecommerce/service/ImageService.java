package com.c820ftjavareact.ecommerce.service;
import com.c820ftjavareact.ecommerce.entity.Image;
import com.c820ftjavareact.ecommerce.repository.ImageRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class ImageService {
    @Getter
    @Setter
    @Autowired
    ImageRepository imageRepository;

    public List<Image> list(){
        return imageRepository.findByOrderById();
    }
    public Optional<Image> getOne(int id){
        return imageRepository.findById(id);
    }
    public  void save(Image image){
        imageRepository.save(image);
    }
    public void delete(int id){
        imageRepository.deleteById(id);
    }
    public boolean exists(int id){
        return imageRepository.existsById(id);
    }
}
