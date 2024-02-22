package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.PickupFeedBack;

@Repository
public interface FeedBackDao extends JpaRepository<PickupFeedBack, Integer> {
	@Query(value=" select pickup.name,feedback,user.username  from pickupfeedback natural join pickup  join user on user.uid=pickupfeedback.uid;",nativeQuery = true)
    List<Object> getAllFeedBacks();

}
