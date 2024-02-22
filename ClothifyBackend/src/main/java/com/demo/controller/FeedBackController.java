package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Order;
import com.demo.model.PickupFeedBack;
import com.demo.service.FeedBackService;
import com.demo.service.OrderService;

@CrossOrigin
@RestController
public class FeedBackController {

	@Autowired
	private FeedBackService feedbackservice;
	@PostMapping("/PickupPersonFeedback")
	   public ResponseEntity<?> acceptorder(@RequestBody PickupFeedBack feedback1){
		   
		        PickupFeedBack feedback =feedbackservice.add(feedback1);
		   if(feedback1!=null) {
			  
			  return ResponseEntity.ok(feedback);
		   }
		   return ResponseEntity.noContent().build();
	   }
	@GetMapping("/userfeedback")
	public  ResponseEntity<List<Object>> getUsersDeta(){
	   
	 List<Object> ulist=feedbackservice.getAllUserFeedback();
	 System.out.println(ulist);
	 return ResponseEntity.ok(ulist);
	 
   }
}
