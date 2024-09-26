package com.example.smart.VDEG.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.smart.VDEG.entity.Activity;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
}
