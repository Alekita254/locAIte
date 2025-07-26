import Debug "mo:base/Debug";
import Time "mo:base/Time";

actor {

  type Person = {
    id : Nat;
    name : Text;
    region : Text;
    ipfsHash : Text;
    timestamp : Int;
  };

  type DetectionLog = {
    personId : Nat;
    matchStatus : Text; // "match" or "no match"
    detectedAt : Int;
  };

  var people : [Person] = [];
  var logs : [DetectionLog] = [];

  // Auto-increment ID
  var nextId : Nat = 0;

  public func addPerson(name: Text, region: Text, ipfsHash: Text) : async Nat {
    let id = nextId;
    nextId += 1;
    let newPerson = {
      id = id;
      name = name;
      region = region;
      ipfsHash = ipfsHash;
      timestamp = Time.now();
    };
    people := Array.append(people, [newPerson]);
    return id;
  };

  public query func getAllPeople() : async [Person] {
    return people;
  };

  public query func getPeopleByRegion(searchRegion: Text) : async [Person] {
    return Array.filter<Person>(people, func(p) { p.region == searchRegion });
  };

  public func logDetection(personId: Nat, matchStatus: Text) : async Bool {
    logs := Array.append(logs, [{
      personId = personId;
      matchStatus = matchStatus;
      detectedAt = Time.now();
    }]);
    return true;
  };

  public query func getDetectionLogs() : async [DetectionLog] {
    return logs;
  };
}
