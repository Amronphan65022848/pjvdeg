package com.example.smart.VDEG.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.smart.VDEG.entity.Activity;
import com.example.smart.VDEG.repository.ActivityRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    // สร้างกิจกรรมใหม่
    public Activity createActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    // ดึงข้อมูลกิจกรรมทั้งหมด
    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    // ดึงข้อมูลกิจกรรมตาม ID
    public Optional<Activity> getActivityById(Long id) {
        return activityRepository.findById(id);
    }

    // อัปเดตข้อมูลกิจกรรม
    public Activity updateActivity(Long id, Activity updatedActivity) {
        return activityRepository.findById(id).map(activity -> {
            activity.setActivityName(updatedActivity.getActivityName());
            activity.setPlaceOfActivity(updatedActivity.getPlaceOfActivity());
            activity.setActivityDescription(updatedActivity.getActivityDescription());
            activity.setVolunteerAmount(updatedActivity.getVolunteerAmount());
            activity.setStartDate(updatedActivity.getStartDate());
            activity.setEndDate(updatedActivity.getEndDate());
            activity.setActivityImageUrl(updatedActivity.getActivityImageUrl());
            activity.setStatus(updatedActivity.isStatus());
            activity.setSponsors(updatedActivity.getSponsors());  // ตั้งค่า sponsors เป็น List<String>
            return activityRepository.save(activity);
        }).orElseGet(() -> {
            updatedActivity.setActivityId(id);
            return activityRepository.save(updatedActivity);
        });
    }

    public Optional<Activity> updateActivityStatus(Long id, boolean status) {
        return activityRepository.findById(id).map(activity -> {
            activity.setStatus(status); // Update only the status
            return activityRepository.save(activity); // Save the updated activity
        });
    }

    

    // ลบกิจกรรมตาม ID
    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }
}
