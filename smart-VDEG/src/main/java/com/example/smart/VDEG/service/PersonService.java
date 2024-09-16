package com.example.smart.VDEG.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.smart.VDEG.entity.Person;
import com.example.smart.VDEG.repository.PersonRepository;
import com.example.smart.VDEG.service.token.JwtUtil;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public String login(String email, String password) {
        Person person = personRepository.findByEmail(email);

        if (person != null && person.getPassword().equals(password)) {
            return jwtUtil.generateToken(person.getEmail(), person.getFirstName(), person.getLastName(), person.getEmail(), person.getRole(), person.getPhone(), person.getImageprofile());
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }


    public Person savePerson(Person person) {
        return personRepository.save(person);
    }

    public Optional<Person> getPersonById(Long id) {
        return personRepository.findById(id);
    }

    // Retrieve all people
    public Iterable<Person> getAllPeople() {
        return personRepository.findAll();
    }

    // Delete a person by id
    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }
}