export enum CardType {
  ALGO = 0,
  DATASTRUCTURE = 1,
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
      // {
      //   idt: _id++,
      //   cardType: CardType.ALGO,
      //   name: '',
      //   description: ``
      // },
      
    ];  
  }

  //get algos, get ds, get all
  public getAlgos(): FlashCard[] {
    return this._algos;
  }

  public getDataStructures(): FlashCard[] {
    return this._dataStructures;
  }

  public getFlashCards(): FlashCard[] {
    return [...this._algos, ...this._dataStructures];
  }
}


