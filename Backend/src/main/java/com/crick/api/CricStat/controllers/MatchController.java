package com.crick.api.CricStat.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.crick.api.CricStat.entities.*;
import com.crick.api.CricStat.services.MatchService;
import com.crick.api.CricStat.services.MatchServiceImpl;

@RestController
@RequestMapping("/match")
@CrossOrigin("*")
public class MatchController {
	
	private MatchService matchService;
	
	public MatchController(MatchService matchService) {
		this.matchService = matchService;
	}
	@GetMapping("/live")
	public ResponseEntity<List<Match>> getLiveMatches(){
		return new ResponseEntity<>(this.matchService.getAllLiveMatches(), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Match>> getAllMatches(){
		return new ResponseEntity<>(this.matchService.getAllMatches(), HttpStatus.OK);
	}
	
	@GetMapping("/point-table")
    public ResponseEntity<?> getCWC2023PointTable() {
        return new ResponseEntity<>(this.matchService.getPointTable(), HttpStatus.OK);
    }
}
