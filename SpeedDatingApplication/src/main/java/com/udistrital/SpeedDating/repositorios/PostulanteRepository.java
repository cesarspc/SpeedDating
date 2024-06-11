/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.udistrital.SpeedDating.repositorios;
import com.udistrital.SpeedDating.modelos.Postulante;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 *
 * @author juan-dev
 */
public interface PostulanteRepository extends JpaRepository<Postulante,Long>{
    
}
