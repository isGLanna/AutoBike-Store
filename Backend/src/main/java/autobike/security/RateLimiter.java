package autobike.security;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class RateLimiter {
  
  private static class RequestInfo {
    int count;
    long timestamp;
    long penaltyLevel;
    long blockedUntil;
  }

  private static final Map<String, RequestInfo> USERS = new ConcurrentHashMap<>();

  public static synchronized boolean isAllowed(String userKey) {
    long now = Instant.now().toEpochMilli();

    RequestInfo info = USERS.getOrDefault(userKey, new RequestInfo());

    if (info.blockedUntil > now) {
      return false;
    }

    //
    if (now - info.timestamp > 3000) {
      info.count = 1;
      info.timestamp = now;
    } else {
      info.count++;
    }

    if (info.count > 30) {
      System.out.println("Usuário bloqueado, suspeita de ataque");
      info.penaltyLevel++;
      long penaltyTime = factorial((int)info.penaltyLevel) * 1000L;

      info.blockedUntil = now + penaltyTime;
      info.count = 0;

      USERS.put(userKey, info);
      return false;
    }
    USERS.put(userKey, info);
    return true;
  }

  private static long factorial(int n) {
    long result = 1;

    if (n <= 1) return 1;

    for (int i = 2; i <= n; i++) {
      result *= (long)i;
    }

    return result;
  }
}
