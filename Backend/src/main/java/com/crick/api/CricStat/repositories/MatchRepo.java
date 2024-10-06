package com.crick.api.CricStat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crick.api.CricStat.entities.Match;
import java.util.List;
import java.util.Optional;


public interface MatchRepo extends JpaRepository<Match, Integer>{

	Optional<Match> findByTeamHeading(String teamHeading);
}
