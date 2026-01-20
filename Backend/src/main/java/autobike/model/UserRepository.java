package autobike.model;

import org.springframework.data.jpa.repository.JpaRepository;

import autobike.domain.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByEmail(String email);
}