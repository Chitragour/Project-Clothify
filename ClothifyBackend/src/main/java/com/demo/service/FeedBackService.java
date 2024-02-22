package com.demo.service;

import java.util.List;

import com.demo.model.PickupFeedBack;

public interface FeedBackService  {

	PickupFeedBack add(PickupFeedBack feedback1);

	List<Object> getAllUserFeedback();

}
