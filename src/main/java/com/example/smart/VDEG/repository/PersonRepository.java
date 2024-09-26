package com.example.smart.VDEG.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.smart.VDEG.entity.Person;


public interface PersonRepository extends JpaRepository<Person, Long> {

    Person findByEmail(String email);
}