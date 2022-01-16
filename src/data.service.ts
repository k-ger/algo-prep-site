export enum CardType {
  ALGO = 0,
  DATASTRUCTURE = 1,
  SYS_DESIGN = 2
}

export type FlashCard = {
  idt: number;
  cardType: CardType;
  name: string;
  description: string;
}

export class DataService {
  private _algos: FlashCard[] = [];
  private _dataStructures: FlashCard[] = [];
  private _sysDesign: FlashCard[] = [];

  constructor() {
    let _id = 0;
    this._algos = [
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "How do you remove duplicates from an array?",
        description: `In C#: Group By, then return the group keys.  
        </br>
        <code>myArr.GroupBy(x => x).Select(z => z.Key).ToList();</code>
        </br></br>
        In JS: 
        </br>
        <code>myArr.filter((n,i) => !myArr.some((m,j) => m === n && j < i))</code>
        `,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "How do you remove duplicates from a SQL table?",
        description: `If your table has at least one true unique column (id) you can do the following: 
        </br></br>
        <code>
          DELETE FROM [SampleDB].[dbo].[Employee]
        </br>  &ensp;    WHERE ID NOT IN
        </br>  &ensp;    (
        </br>  &ensp;  &ensp;    SELECT MAX(ID) AS MaxRecordID
        </br>  &ensp;  &ensp;    FROM [SampleDB].[dbo].[Employee]
        </br>  &ensp;  &ensp;    GROUP BY [FirstName], 
        </br>  &ensp;  &ensp;            [LastName], 
        </br>  &ensp;  &ensp;            [Country]
        </br>  &ensp;    );
            </code>
            
        </br></br>
        If not, you can create a CTE that gets the <code>ROW_NUMBER OVER (PARTITION BY every column)</code> for every row, then delete all rows where row_num > 1,
        or something similar to this.
        `,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "How do you return the sum of all even numbers in an array?",
        description: `One liner vs for loop:
        </br></br>
        In C#: </br>
        <code>myArr.Where(x => x % 2 == 0).Sum();
        </code>`,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "How do you reverse a linked list?",
        description: `Recursion; recurse deeper one level before returning a value.  This way, the first time you hit a return statement, you are at the end of the Linked List.
        Subsequent returns will be in tail to head order, so you can yield the current node and thus construct the LL in reverse.`,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "How do you reverse all the words in a sentence?",
        description: `C#:</br>
        <code>
        string.Join(" ", inputString.Split(' ').Select(x => new String(x.Reverse().ToArray())));
        </code>
        </br></br>
        JS:</br>
        <code>
        inputString.split("").reverse().join("").split(" ").reverse().join(" ") 
        </code>
        </br></br>
        Python:</br>
        <code>
        ' '.join([''.join(list(reversed(w))) for w in inputString.split(' ')])
        </code>
        `,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "How can you find out if a linked list is circular?",
        description: `2 pointers; tortoise/hare.  1 pointer moves 1 node forward, and the other moves 2 nodes forward.  
        If they ever point to the same node, it is circular.`,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "How do you find the largest sum of contiguous integers in an array?",
        description: `Dynamic programming; check if including next will increase your total.  Same applies to largest sum of non-contiguous.  
        Not super intuitive, but solution is trivial.`,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "Write the function for Fibonacci numbers.",
        description: `Can be recursive or iterative: iterative better. Recursive: fib(n-1) + fib(n-2). Iterative: returns prev + prev_prev.
        Recursing more than a few dozen or so levels deep will start to choke due to number of operations unless you use memoization.`,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "Staircase problem: you can take 1 or 2 steps at a time, how many combinations to climb n steps?",
        description: `Same as Fibonacci; sum of prev + prev_prev.  Well known Amazon problem.`,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: "How do you take 2 sorted arrays and combine them into a new sorted array?",
        description: `If you know the 2 arrays are sorted, pick the samller of the leading integers of each and traverse toward tails, taking smaller of 2 each time.`,
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: 'How do you swap 2 variables without using a 3rd temp var?',
        description: `In many modern languages, you can do so by destructuring/pattern matching.  
        Otherwise, there are 2 ways:</br></br>
        1. Algebraic approach: x = x + y; y = x - y; x = x - y; 
        </br></br>
        2. XOR Approach: x = x ^ y; y = x ^ y; x = x ^ y;`
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: 'How can you tell if a string is a palindrome?',
        description: `Trivial; helps to know string methods:
        </br></br>
        In JS:</br>
        let pal = myString.split('').reverse().join('');
        </br></br>
        In C#:</br>
        var pal = new string(myString.Reverse().ToArray());
        </br>or</br>
        var pal = string.Concat(myString.Reverse());
        `
      },
      {
        idt: _id++,
        cardType: CardType.ALGO,
        name: 'How do you sort an array of objects by multiple properties?',
        description: `
        In JS:</br>
        <code>
        data.sort((a, b) => {          
        </br>&ensp;  if (a.name === b.name) {
        </br>&ensp;    &ensp;// Age is only important when names are the same
        </br>&ensp;    &ensp;return b.age - a.age;
        </br>&ensp;  }
        </br>&ensp;  return a.name > b.name ? 1 : -1;
        </br>});
        </code>
        </br></br>
        In C#:</br>
        <code>personList.OrderBy(x => x.Name).ThenBy(x => x.Age);</code>
        </br>//if need to order by descending:</br>
        <code>personList.OrderByDescending(x => x.Name).ThenByDescending(x => x.Age);</code>
        `
      },
      // {
      //   idt: _id++,
      //   cardType: CardType.ALGO,
      //   name: ``,
      //   description: ``
      // },
    ];  
    _id = 0;

    this._dataStructures = [
      {
        idt: _id++,
        cardType: CardType.DATASTRUCTURE,
        name: `Sorting Algorithm Perfomance`,
        description: `
        <table>
        <tbody><tr>
        <th></th>
                <th colspan="3">Time</th>
                <th colspan="4"></th>
            </tr>
        <tr>
        <td>Sort</td>
                <td>Average</td>
                <td>Best</td>
                <td>Worst</td>
                <td>Space</td>
                <td>Stability</td>
                <td>Remarks</td>
            </tr>
        <tr>
        <td><strong>Bubble sort</strong></td>
                <td>O(n^2)</td>
                <td>O(n^2)</td>
                <td>O(n^2)</td>
                <td>Constant</td>
                <td>Stable</td>
                <td>Always use a modified bubble sort</td>
            </tr>
        <tr>
        <td><strong>Modified Bubble sort</strong></td>
                <td>O(n^2)</td>
                <td>O(n)</td>
                <td>O(n^2)</td>
                <td>Constant</td>
                <td>Stable</td>
                <td>Stops after reaching a sorted array</td>
            </tr>
        <tr>
        <td><strong>Selection Sort</strong></td>
                <td>O(n^2)</td>
                <td>O(n^2)</td>
                <td>O(n^2)</td>
                <td>Constant</td>
                <td>Stable</td>
                <td>Even a perfectly sorted input requires scanning the entire array</td>
            </tr>
        <tr>
        <td><strong>Insertion Sort</strong></td>
                <td>O(n^2)</td>
                <td>O(n)</td>
                <td>O(n^2)</td>
                <td>Constant</td>
                <td>Stable</td>
                <td>In the best case (already sorted), every insert requires constant time</td>
            </tr>
        <tr>
        <td><strong>Heap Sort</strong></td>
                <td>O(n*log(n))</td>
                <td>O(n*log(n))</td>
                <td>O(n*log(n))</td>
                <td>Constant</td>
                <td>Instable</td>
                <td>By using input array as storage for the heap, it is possible to
                    achieve constant space</td>
            </tr>
        <tr>
        <td><strong>Merge Sort</strong></td>
                <td>O(n*log(n))</td>
                <td>O(n*log(n))</td>
                <td>O(n*log(n))</td>
                <td>Depends</td>
                <td>Stable</td>
                <td>On arrays, merge sort requires O(n) space; on linked lists, merge
               sort requires constant space</td>
            </tr>
        <tr>
        <td><strong>Quicksort</strong></td>
                <td>O(n*log(n))</td>
                <td>O(n*log(n))</td>
                <td>O(n^2)</td>
                <td>Constant</td>
                <td>Stable</td>
                <td>Randomly picking a pivot value (or shuffling the array prior to
                    sorting) can help avoid worst case scenarios such as a perfectly
                    sorted array.</td>
            </tr>
        </tbody></table>
        `
      },
    ]


    _id = 0;
    this._sysDesign = [
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `What's an API Gateway?`,
        description: `
        Sits between clients and services, acts as reverse proxy.
        </br>Can perform authentication, rate limiting, request aggregation (many reqs into one request).
        </br>Outside of API Gateway, HTTP or WebSocket often used. Gateway can communicate inside with services using lighter protocol.
        </br>Drawbacks:
        </br>&ensp;  - increased complexity — The API gateway is yet another moving part that must be developed, deployed and managed.
        </br>&ensp;  - increased response time due to additional network hop.
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `What are the benefits of a Distributed System?`,
        description: `
        Availability
        </br>&ensp;  - Amount of time a sys is operational during a period of time
        </br>&ensp;  - Poorly-designed software requiring downtime for updates is less available
        </br>&ensp;  - Measure availability: %
        </br>&ensp;    (available time / total time) * 100
        </br>&ensp;    (23 hours / 24 hours) * 100 = 95.83%
        </br>More reliable, fault tolerant
        </br>&ensp;  - Probability a system will fail during a period of time
        </br>&ensp;  - Slightly harder to define than hardware reliability
        </br>&ensp;  - Measure reliability: Mean Time Between Failure: MTFB
        </br>&ensp;    MTFB = (total elapsed time - total downtime) / number of failures
        </br>&ensp;    (24 hours - 4 hours) / 4 failures = 5 MTBF
        </br>Scalability
        </br>&ensp;  - Ability of a sys to grow and manage increased traffic
        </br>&ensp;  - Increased data or volume of requests
        </br>Lower latency, increased performance
        </br>Cost effective
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `How do you avoid single points of failure?`,
        description: `
        For servers: more nodes</br>
        For databases: replication (master-slave architecture)</br>
        For load balancer/gateway: multiple nodes as well</br>
        For geographic location: multiple regions
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `What is Network Partitioning?`,
        description: `
        When a link between 2 or more machines/servers goes down, they are no longer directly connected.
        They may still both be connected to the entire system via connections to other machines.
        This partition may or may not be visible to other components that interact with these 2.
        </br>&ensp;  - depends on how system is designed.
        </br>&ensp;  - if this is the case, this can be a silent failure.
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `Cascading failure in a distributed system.  What is it and how do you avoid it?`,
        description: `
        When one server goes down, its requests get rerouted to the rest of the available servers.
        </br>If one of those was already at capacity, it will go down, and now its original request load (plus new slice of first dead server's request load) will need to be redistributed among the remaining servers.  
        So on and so forth... This can lead to cascading failure of all servers!
        </br>Solutions: 
        </br>&ensp;    - have a max request capacity counter for each server, and once it is exceeded, drop the request (return failed to user)
        </br>&ensp;&ensp;      - do this until new server is up and running, then redistribute requests evenly across all servers
        </br>&ensp;    - if you can anticipate the surge in users (e.g., black friday) pre-scale.  Spin up some extra servers
        </br>&ensp;    - auto-scale: cloud service providers provide this feature
        </br>&ensp;    - rate limit: this leads to poor user experience (best to avoid, but it's better to serve some users than no users)
        </br>&ensp;    - cache results (if many common requests)
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `What is Consistent Hashing?`,
        description: `
        </br>Once a new server is added, each request will go to the server directly clockwise to it (on hash ring)
        </br>This way when new server is added, only one other server is affected
        </br>One technique to evenly distribute requests is by using multiple hashing functions, and putting one server in multiple places on the ring:
        </br>&ensp;  - the more capacity the server can handle, the more hashing functions apply to it, and the more times it appears on the ring
        </br>&ensp;  - this is called virtual nodes
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `How do you measure performance of your app components?`,
        description: `
        Performance aspects of an entire application:
        </br>&ensp;  - throughput
        </br>&ensp;  - response time
        </br>&ensp;  - error rate
        </br>&ensp;  - bugs/defects in code
        </br>Performance aspects of a database:
        </br>&ensp;  - time taken by queries
        </br>&ensp;  - number of queries executed per unit time
        </br>Performance aspects of a cache:
        </br>&ensp;  - latency of writes
        </br>&ensp;  - eviction/invalidation strategy
        </br>&ensp;  - memory of cache instance
        </br>Performance aspects of message queues:
        </br>&ensp;  - rate of production/consumption
        </br>&ensp;  - fraction of stale or unprocessed messages
        </br>&ensp;  - number of consumers affects bandwidth and throughput
        </br>Performance aspects of server instance	
        </br>&ensp;  - memory/ram usage
        </br>&ensp;  - CPU load
        </br>
        </br>Tools to measure performance:
        </br>&ensp;  - Performance mgmt tools
        </br>&ensp;  - deployed or used in conjuction with application
        </br>&ensp;  - connected to a dashboard with alerts
        </br>&ensp;&ensp;    - see datadog, others
        `
      },

      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `What's the 20/80 rule?`,
        description: `
        20% of your stored data will be used used (read, etc) 80% of the time. (popular data) - want to try to cache this - keep in mem?
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `How can you identifying bottlenecks in performance in you system?`,
        description: `
        1. Load testing: measure system behavior under a specific, expected load
        </br>&ensp;  - determine if scalable: test with 2 or 3 time increase in traffic
        </br>2. Stress testing: test beyond normal operating capacity, often to a breaking point
        </br>&ensp;  - determine the breaking point of the system: which component will start to suffer first, and what resource it will be (memory? CPU? network? diskIO?)
        </br>3. Soak testing: test with a typical production load for an extended period of time
        </br>&ensp;  - find leaks in resources: memory leaks
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `Blocking system vs Non-blocking system`,
        description: `
        </br>Blocking system: each request uses (blocks) a socket and a thread, and if another request arrives, another thread is created
        </br>&ensp;  - 1 thread per connection
        </br>&ensp;  - modern multi-core machines can handle hundreds of concurrent connections
        </br>&ensp;  - easier to catch/handle exceptions
        </br>Non-Blocking systems:  use a single thread on the server side to handle many requests.  More efficient, higher throughput
        </br>&ensp;  - increased complexity of interaction
        </br>&ensp;  - more difficult to handle exceptions
        `
      },
      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `Batching vs sending events 1 by 1 (streaming)`,
        description: `
        Batching increases throughput, saves on cost, request compression more effective.
        Introduces complexity: what if some succeed some fail in a batch: what do do?
        `
      },

      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `What are Load Balancers used for?`,
        description: `
        </br>Load Balancing: route traffic smartly.
        </br>2 types: hardware, software (ELB from AWS, for example)
        </br>TCP LB: only forwards packets, without looking into them - fast, high throughput (million of req/s)
        </br>HTTP LB: terminates the connection.  
        </br>&ensp;  - gets a request from client, establishes a connection to the server, and sends a request to this server
        </br>&ensp;  - can look inside the message and make decision based on content: cookies, for example
        </br>Availability: LB has primary and secondary nodes.  If primary goes down, secondary is on standby to jump in. 
        `
      },

      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `How does one component of the system know about another?`,
        description: `
        - DNS: register each part (Load Balancer, Partitioner Service, etc).
        </br>- Health Checking: LB periodically pings each server, and stops routing traffic to it if it isn't responding on time.
        `
      },

      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `What format can messages be sent in?`,
        description: `
        - can use textual or binary
        </br>- textual: easier to read, less compact
        </br>&ensp;  - ex: XML, CSV, JSON
        </br>- binary: more compact, faster to parse (no field names that take up space)
        </br>&ensp;  - ex: apache thrift, protocol buffers (protobuf) Avro
        </br>&ensp;  - schemas are crucial: (they're needed to serialize/deserialize)  schemas need to be stored somewhere
        `
      },

      {
        idt: _id++,
        cardType: CardType.SYS_DESIGN,
        name: `What are some Load Balancer methods?`,
        description: `
        Round Robin
        </br>&ensp;  - simplest type of routing
        </br>&ensp;  - can result in eneven traffic
        </br>Least Connections
        </br>&ensp;  - routes based on number of client connections to server
        </br>&ensp;  - useful for chat or streaming applications
        </br>Least Response Time
        </br>&ensp;  - routes based on how quickly servers respond
        </br>IP Hash
        </br>&ensp;  - routes client to server based on ip
        </br>&ensp;  - useful for stateful sessions
        `
      },


      // {
      //   idt: _id++,
      //   cardType: CardType.SYS_DESIGN,
      //   name: ``,
      //   description: `

      //   `
      // },
    ];
  }
  
  

  //get algos, get ds, get all
  // public getAlgos(): FlashCard[] {
  //   return this._algos;
  // }

  // public getDataStructures(): FlashCard[] {
  //   return this._dataStructures;
  // }

  public getFlashCards(): FlashCard[] {
    return [...this._algos, ...this._dataStructures, ...this._sysDesign];
  }
}


