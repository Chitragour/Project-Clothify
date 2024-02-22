package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.FeedBackDao;
import com.demo.model.PickupFeedBack;

@Service
public class FeedBackServiceImpl implements FeedBackService{
   
	@Autowired
	private FeedBackDao feedbackdao;
	@Override
	public PickupFeedBack add(PickupFeedBack feedback1) {
		// TODO Auto-generated method stub
		return feedbackdao.save(feedback1);
	}
	@Override
	public List<Object> getAllUserFeedback() {
		// TODO Auto-generated method stub
		return feedbackdao.getAllFeedBacks();
	}

	
}
