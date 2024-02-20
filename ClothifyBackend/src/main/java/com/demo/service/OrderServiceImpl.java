package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.OrderDao;

import com.demo.model.Order;
@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderDao orderdao;
	@Override
	public Order add(Order order) {
		// TODO Auto-generated method stub
		return orderdao.save(order);
	}
	@Override
	public int Update(Order order) {
		// TODO Auto-generated method stub
		return orderdao.SetPickUp(order.getOid(),order.getPid().getPid());
	}
	@Override
	public void complete(Order order) {
		// TODO Auto-generated method stub
		orderdao.deleteById(order.getOid());
		
	}
	@Override
	public List<Object> getAllUserOrder() {
		// TODO Auto-generated method stub
		return orderdao.getallorders();
	}
	@Override
	public List<Order> getAllOrder(int uid) {
		// TODO Auto-generated method stub
		return orderdao.ordersGetById(uid);
	}
	@Override
	public void deleteOrder(int uid) {
		// TODO Auto-generated method stub
		orderdao.deleteOrderById(uid);
	}
	@Override
	public void updateOrderById(int oid,Order order) {
		// TODO Auto-generated method stub
		orderdao.updateOrderById(oid,order.getPickupDate(),order.getPickupDescription(),order.getNoOfItems());
	}
	

}
