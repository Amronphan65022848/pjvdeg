package com.example.smart.VDEG.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.smart.VDEG.entity.Activity;
import com.example.smart.VDEG.service.ActivityService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/activities")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    // สร้างกิจกรรมใหม่
    @PostMapping
    public ResponseEntity<Activity> createActivity(@RequestBody Activity activity) {
        Activity createdActivity = activityService.createActivity(activity);
        return ResponseEntity.ok(createdActivity);
    }

    // ดึงข้อมูลกิจกรรมทั้งหมด
    @GetMapping
    public ResponseEntity<List<Activity>> getAllActivities() {
        List<Activity> activities = activityService.getAllActivities();
        return ResponseEntity.ok(activities);
    }

    // ดึงข้อมูลกิจกรรมตาม ID
    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable("id") Long id) {
        Optional<Activity> activity = activityService.getActivityById(id);
        return activity.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // อัปเดตข้อมูลกิจกรรม
    @PutMapping("/{id}")
    public ResponseEntity<Activity> updateActivity(@PathVariable("id") Long id, @RequestBody Activity updatedActivity) {
        Activity updated = activityService.updateActivity(id, updatedActivity);
        return ResponseEntity.ok(updated);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Activity> updateActivityStatus(@PathVariable Long id, @RequestBody boolean status) {
        Optional<Activity> updatedActivity = activityService.updateActivityStatus(id, status);
        return updatedActivity.map(activity -> ResponseEntity.ok(activity))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ลบกิจกรรมตาม ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteActivity(@PathVariable("id") Long id) {
        activityService.deleteActivity(id);
        return ResponseEntity.noContent().build();
    }
}
