const tokenCounts = {
    bianchi: 0,
    neri: 0,
    causali: 0
  };

  function updateToken(type, delta) {
    tokenCounts[type] += delta;
    if (tokenCounts[type] < 0) tokenCounts[type] = 0; // Non andare sotto zero
    document.getElementById(`token-${type}-count`).textContent = tokenCounts[type];
  }