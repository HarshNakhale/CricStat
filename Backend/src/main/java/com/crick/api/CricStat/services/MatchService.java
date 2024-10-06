package com.crick.api.CricStat.services;

import java.util.List;
import java.util.Map;

import com.crick.api.CricStat.entities.Match;

public interface MatchService {

//	get all matches
	List<Match> getAllMatches();
	
	
//	get all live matches
	List<Match> getAllLiveMatches();
	
//	get world cup points table
	List<List<String>> getPointTable();
	
}
