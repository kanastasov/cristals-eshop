package com.gmail.merikbest2015.ecommerce.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@Table(name = "minertals")
public class Minerals {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "mineral_title")
    private String mineralTitle;

    @Column(name = "country")
    private String country;

    @Column(name = "crystals_gender")
    private String crystalsGender;

    @Column(name = "description")
    private String description;
    
    @Column(name = "filename")
    private String filename;
    
    @Column(name = "price")
    private Double price;
    
    @Column(name = "quantity")
    private int quantity;
    
    @Column(name = "mineral_rating")
    private Double mineralRating;

    @OneToMany
    @ToString.Exclude
    private List<Review> reviews;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Minerals mineral = (Minerals) o;
        return Objects.equals(id, mineral.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
