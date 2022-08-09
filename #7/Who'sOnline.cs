using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  public static Dictionary<UserStatus, IEnumerable<string>> WhosOnline(User[] friends)
  {
    var dict = new Dictionary<UserStatus, IEnumerable<string>>();
    var offline = friends.Where(f => f.Status == UserStatus.Offline).ToList();
    var online = friends.Where(f => f.Status == UserStatus.Online && f.LastActivity <= 10).ToList();
    var away = friends.Where(f => f.Status == UserStatus.Online && f.LastActivity > 10).ToList();

    if (online.Count > 0) {
        dict.Add(UserStatus.Online, online.Select(f => f.Username).ToArray());
    }

    if (offline.Count > 0) {
        dict.Add(UserStatus.Offline, offline.Select(f => f.Username).ToArray());
    }

    if (away.Count > 0) {
        dict.Add(UserStatus.Away, away.Select(f => f.Username).ToArray());
    }

    return dict;
  }
}

