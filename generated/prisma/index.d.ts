
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model BarterSession
 * 
 */
export type BarterSession = $Result.DefaultSelection<Prisma.$BarterSessionPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model UserSkill
 * 
 */
export type UserSkill = $Result.DefaultSelection<Prisma.$UserSkillPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED',
  BLOCKED: 'BLOCKED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const SessionStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const SkillType: {
  OFFER: 'OFFER',
  WANT: 'WANT'
};

export type SkillType = (typeof SkillType)[keyof typeof SkillType]


export const SkillLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  EXPERT: 'EXPERT'
};

export type SkillLevel = (typeof SkillLevel)[keyof typeof SkillLevel]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type SkillType = $Enums.SkillType

export const SkillType: typeof $Enums.SkillType

export type SkillLevel = $Enums.SkillLevel

export const SkillLevel: typeof $Enums.SkillLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barterSession`: Exposes CRUD operations for the **BarterSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarterSessions
    * const barterSessions = await prisma.barterSession.findMany()
    * ```
    */
  get barterSession(): Prisma.BarterSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkill`: Exposes CRUD operations for the **UserSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkills
    * const userSkills = await prisma.userSkill.findMany()
    * ```
    */
  get userSkill(): Prisma.UserSkillDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Review: 'Review',
    BarterSession: 'BarterSession',
    Skill: 'Skill',
    UserSkill: 'UserSkill'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "review" | "barterSession" | "skill" | "userSkill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      BarterSession: {
        payload: Prisma.$BarterSessionPayload<ExtArgs>
        fields: Prisma.BarterSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarterSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarterSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>
          }
          findFirst: {
            args: Prisma.BarterSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarterSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>
          }
          findMany: {
            args: Prisma.BarterSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>[]
          }
          create: {
            args: Prisma.BarterSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>
          }
          createMany: {
            args: Prisma.BarterSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarterSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>[]
          }
          delete: {
            args: Prisma.BarterSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>
          }
          update: {
            args: Prisma.BarterSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>
          }
          deleteMany: {
            args: Prisma.BarterSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarterSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarterSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>[]
          }
          upsert: {
            args: Prisma.BarterSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarterSessionPayload>
          }
          aggregate: {
            args: Prisma.BarterSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarterSession>
          }
          groupBy: {
            args: Prisma.BarterSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarterSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarterSessionCountArgs<ExtArgs>
            result: $Utils.Optional<BarterSessionCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      UserSkill: {
        payload: Prisma.$UserSkillPayload<ExtArgs>
        fields: Prisma.UserSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findFirst: {
            args: Prisma.UserSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findMany: {
            args: Prisma.UserSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          create: {
            args: Prisma.UserSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          createMany: {
            args: Prisma.UserSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          delete: {
            args: Prisma.UserSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          update: {
            args: Prisma.UserSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          aggregate: {
            args: Prisma.UserSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkill>
          }
          groupBy: {
            args: Prisma.UserSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    review?: ReviewOmit
    barterSession?: BarterSessionOmit
    skill?: SkillOmit
    userSkill?: UserSkillOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessionAsTeacher: number
    sessionAsStudent: number
    userSkills: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessionAsTeacher?: boolean | UserCountOutputTypeCountSessionAsTeacherArgs
    sessionAsStudent?: boolean | UserCountOutputTypeCountSessionAsStudentArgs
    userSkills?: boolean | UserCountOutputTypeCountUserSkillsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionAsTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarterSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionAsStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarterSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    users: number
    barterSessions: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SkillCountOutputTypeCountUsersArgs
    barterSessions?: boolean | SkillCountOutputTypeCountBarterSessionsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountBarterSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarterSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    credits: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    profileImg: string | null
    role: $Enums.Role | null
    credits: number | null
    isActive: $Enums.Status | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    profileImg: string | null
    role: $Enums.Role | null
    credits: number | null
    isActive: $Enums.Status | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    address: number
    profileImg: number
    role: number
    credits: number
    isActive: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    profileImg?: true
    role?: true
    credits?: true
    isActive?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    profileImg?: true
    role?: true
    credits?: true
    isActive?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    profileImg?: true
    role?: true
    credits?: true
    isActive?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone: string | null
    address: string | null
    profileImg: string | null
    role: $Enums.Role
    credits: number
    isActive: $Enums.Status
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    profileImg?: boolean
    role?: boolean
    credits?: boolean
    isActive?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessionAsTeacher?: boolean | User$sessionAsTeacherArgs<ExtArgs>
    sessionAsStudent?: boolean | User$sessionAsStudentArgs<ExtArgs>
    userSkills?: boolean | User$userSkillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    profileImg?: boolean
    role?: boolean
    credits?: boolean
    isActive?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    profileImg?: boolean
    role?: boolean
    credits?: boolean
    isActive?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    profileImg?: boolean
    role?: boolean
    credits?: boolean
    isActive?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "address" | "profileImg" | "role" | "credits" | "isActive" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessionAsTeacher?: boolean | User$sessionAsTeacherArgs<ExtArgs>
    sessionAsStudent?: boolean | User$sessionAsStudentArgs<ExtArgs>
    userSkills?: boolean | User$userSkillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessionAsTeacher: Prisma.$BarterSessionPayload<ExtArgs>[]
      sessionAsStudent: Prisma.$BarterSessionPayload<ExtArgs>[]
      userSkills: Prisma.$UserSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone: string | null
      address: string | null
      profileImg: string | null
      role: $Enums.Role
      credits: number
      isActive: $Enums.Status
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessionAsTeacher<T extends User$sessionAsTeacherArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionAsTeacherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionAsStudent<T extends User$sessionAsStudentArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionAsStudentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSkills<T extends User$userSkillsArgs<ExtArgs> = {}>(args?: Subset<T, User$userSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly profileImg: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Status'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessionAsTeacher
   */
  export type User$sessionAsTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    where?: BarterSessionWhereInput
    orderBy?: BarterSessionOrderByWithRelationInput | BarterSessionOrderByWithRelationInput[]
    cursor?: BarterSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarterSessionScalarFieldEnum | BarterSessionScalarFieldEnum[]
  }

  /**
   * User.sessionAsStudent
   */
  export type User$sessionAsStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    where?: BarterSessionWhereInput
    orderBy?: BarterSessionOrderByWithRelationInput | BarterSessionOrderByWithRelationInput[]
    cursor?: BarterSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarterSessionScalarFieldEnum | BarterSessionScalarFieldEnum[]
  }

  /**
   * User.userSkills
   */
  export type User$userSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    sessionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    sessionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    sessionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string | null
    sessionId: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | BarterSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | BarterSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | BarterSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "sessionId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | BarterSessionDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | BarterSessionDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | BarterSessionDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      session: Prisma.$BarterSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      sessionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends BarterSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarterSessionDefaultArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly sessionId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model BarterSession
   */

  export type AggregateBarterSession = {
    _count: BarterSessionCountAggregateOutputType | null
    _avg: BarterSessionAvgAggregateOutputType | null
    _sum: BarterSessionSumAggregateOutputType | null
    _min: BarterSessionMinAggregateOutputType | null
    _max: BarterSessionMaxAggregateOutputType | null
  }

  export type BarterSessionAvgAggregateOutputType = {
    hours: number | null
  }

  export type BarterSessionSumAggregateOutputType = {
    hours: number | null
  }

  export type BarterSessionMinAggregateOutputType = {
    id: string | null
    teacherId: string | null
    learnerId: string | null
    skillId: string | null
    hours: number | null
    status: $Enums.SessionStatus | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarterSessionMaxAggregateOutputType = {
    id: string | null
    teacherId: string | null
    learnerId: string | null
    skillId: string | null
    hours: number | null
    status: $Enums.SessionStatus | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarterSessionCountAggregateOutputType = {
    id: number
    teacherId: number
    learnerId: number
    skillId: number
    hours: number
    status: number
    scheduledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarterSessionAvgAggregateInputType = {
    hours?: true
  }

  export type BarterSessionSumAggregateInputType = {
    hours?: true
  }

  export type BarterSessionMinAggregateInputType = {
    id?: true
    teacherId?: true
    learnerId?: true
    skillId?: true
    hours?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarterSessionMaxAggregateInputType = {
    id?: true
    teacherId?: true
    learnerId?: true
    skillId?: true
    hours?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarterSessionCountAggregateInputType = {
    id?: true
    teacherId?: true
    learnerId?: true
    skillId?: true
    hours?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarterSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarterSession to aggregate.
     */
    where?: BarterSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarterSessions to fetch.
     */
    orderBy?: BarterSessionOrderByWithRelationInput | BarterSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarterSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarterSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarterSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarterSessions
    **/
    _count?: true | BarterSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarterSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarterSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarterSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarterSessionMaxAggregateInputType
  }

  export type GetBarterSessionAggregateType<T extends BarterSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateBarterSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarterSession[P]>
      : GetScalarType<T[P], AggregateBarterSession[P]>
  }




  export type BarterSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarterSessionWhereInput
    orderBy?: BarterSessionOrderByWithAggregationInput | BarterSessionOrderByWithAggregationInput[]
    by: BarterSessionScalarFieldEnum[] | BarterSessionScalarFieldEnum
    having?: BarterSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarterSessionCountAggregateInputType | true
    _avg?: BarterSessionAvgAggregateInputType
    _sum?: BarterSessionSumAggregateInputType
    _min?: BarterSessionMinAggregateInputType
    _max?: BarterSessionMaxAggregateInputType
  }

  export type BarterSessionGroupByOutputType = {
    id: string
    teacherId: string
    learnerId: string
    skillId: string
    hours: number
    status: $Enums.SessionStatus
    scheduledAt: Date
    createdAt: Date
    updatedAt: Date
    _count: BarterSessionCountAggregateOutputType | null
    _avg: BarterSessionAvgAggregateOutputType | null
    _sum: BarterSessionSumAggregateOutputType | null
    _min: BarterSessionMinAggregateOutputType | null
    _max: BarterSessionMaxAggregateOutputType | null
  }

  type GetBarterSessionGroupByPayload<T extends BarterSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarterSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarterSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarterSessionGroupByOutputType[P]>
            : GetScalarType<T[P], BarterSessionGroupByOutputType[P]>
        }
      >
    >


  export type BarterSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    learnerId?: boolean
    skillId?: boolean
    hours?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    learner?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    review?: boolean | BarterSession$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["barterSession"]>

  export type BarterSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    learnerId?: boolean
    skillId?: boolean
    hours?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    learner?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barterSession"]>

  export type BarterSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    learnerId?: boolean
    skillId?: boolean
    hours?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    learner?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barterSession"]>

  export type BarterSessionSelectScalar = {
    id?: boolean
    teacherId?: boolean
    learnerId?: boolean
    skillId?: boolean
    hours?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarterSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "learnerId" | "skillId" | "hours" | "status" | "scheduledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["barterSession"]>
  export type BarterSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    learner?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    review?: boolean | BarterSession$reviewArgs<ExtArgs>
  }
  export type BarterSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    learner?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type BarterSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    learner?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $BarterSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarterSession"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      learner: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacherId: string
      learnerId: string
      skillId: string
      hours: number
      status: $Enums.SessionStatus
      scheduledAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barterSession"]>
    composites: {}
  }

  type BarterSessionGetPayload<S extends boolean | null | undefined | BarterSessionDefaultArgs> = $Result.GetResult<Prisma.$BarterSessionPayload, S>

  type BarterSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarterSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarterSessionCountAggregateInputType | true
    }

  export interface BarterSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarterSession'], meta: { name: 'BarterSession' } }
    /**
     * Find zero or one BarterSession that matches the filter.
     * @param {BarterSessionFindUniqueArgs} args - Arguments to find a BarterSession
     * @example
     * // Get one BarterSession
     * const barterSession = await prisma.barterSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarterSessionFindUniqueArgs>(args: SelectSubset<T, BarterSessionFindUniqueArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarterSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarterSessionFindUniqueOrThrowArgs} args - Arguments to find a BarterSession
     * @example
     * // Get one BarterSession
     * const barterSession = await prisma.barterSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarterSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, BarterSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarterSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarterSessionFindFirstArgs} args - Arguments to find a BarterSession
     * @example
     * // Get one BarterSession
     * const barterSession = await prisma.barterSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarterSessionFindFirstArgs>(args?: SelectSubset<T, BarterSessionFindFirstArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarterSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarterSessionFindFirstOrThrowArgs} args - Arguments to find a BarterSession
     * @example
     * // Get one BarterSession
     * const barterSession = await prisma.barterSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarterSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, BarterSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarterSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarterSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarterSessions
     * const barterSessions = await prisma.barterSession.findMany()
     * 
     * // Get first 10 BarterSessions
     * const barterSessions = await prisma.barterSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barterSessionWithIdOnly = await prisma.barterSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarterSessionFindManyArgs>(args?: SelectSubset<T, BarterSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarterSession.
     * @param {BarterSessionCreateArgs} args - Arguments to create a BarterSession.
     * @example
     * // Create one BarterSession
     * const BarterSession = await prisma.barterSession.create({
     *   data: {
     *     // ... data to create a BarterSession
     *   }
     * })
     * 
     */
    create<T extends BarterSessionCreateArgs>(args: SelectSubset<T, BarterSessionCreateArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarterSessions.
     * @param {BarterSessionCreateManyArgs} args - Arguments to create many BarterSessions.
     * @example
     * // Create many BarterSessions
     * const barterSession = await prisma.barterSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarterSessionCreateManyArgs>(args?: SelectSubset<T, BarterSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarterSessions and returns the data saved in the database.
     * @param {BarterSessionCreateManyAndReturnArgs} args - Arguments to create many BarterSessions.
     * @example
     * // Create many BarterSessions
     * const barterSession = await prisma.barterSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarterSessions and only return the `id`
     * const barterSessionWithIdOnly = await prisma.barterSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarterSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, BarterSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarterSession.
     * @param {BarterSessionDeleteArgs} args - Arguments to delete one BarterSession.
     * @example
     * // Delete one BarterSession
     * const BarterSession = await prisma.barterSession.delete({
     *   where: {
     *     // ... filter to delete one BarterSession
     *   }
     * })
     * 
     */
    delete<T extends BarterSessionDeleteArgs>(args: SelectSubset<T, BarterSessionDeleteArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarterSession.
     * @param {BarterSessionUpdateArgs} args - Arguments to update one BarterSession.
     * @example
     * // Update one BarterSession
     * const barterSession = await prisma.barterSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarterSessionUpdateArgs>(args: SelectSubset<T, BarterSessionUpdateArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarterSessions.
     * @param {BarterSessionDeleteManyArgs} args - Arguments to filter BarterSessions to delete.
     * @example
     * // Delete a few BarterSessions
     * const { count } = await prisma.barterSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarterSessionDeleteManyArgs>(args?: SelectSubset<T, BarterSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarterSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarterSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarterSessions
     * const barterSession = await prisma.barterSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarterSessionUpdateManyArgs>(args: SelectSubset<T, BarterSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarterSessions and returns the data updated in the database.
     * @param {BarterSessionUpdateManyAndReturnArgs} args - Arguments to update many BarterSessions.
     * @example
     * // Update many BarterSessions
     * const barterSession = await prisma.barterSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarterSessions and only return the `id`
     * const barterSessionWithIdOnly = await prisma.barterSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarterSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, BarterSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarterSession.
     * @param {BarterSessionUpsertArgs} args - Arguments to update or create a BarterSession.
     * @example
     * // Update or create a BarterSession
     * const barterSession = await prisma.barterSession.upsert({
     *   create: {
     *     // ... data to create a BarterSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarterSession we want to update
     *   }
     * })
     */
    upsert<T extends BarterSessionUpsertArgs>(args: SelectSubset<T, BarterSessionUpsertArgs<ExtArgs>>): Prisma__BarterSessionClient<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarterSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarterSessionCountArgs} args - Arguments to filter BarterSessions to count.
     * @example
     * // Count the number of BarterSessions
     * const count = await prisma.barterSession.count({
     *   where: {
     *     // ... the filter for the BarterSessions we want to count
     *   }
     * })
    **/
    count<T extends BarterSessionCountArgs>(
      args?: Subset<T, BarterSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarterSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarterSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarterSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarterSessionAggregateArgs>(args: Subset<T, BarterSessionAggregateArgs>): Prisma.PrismaPromise<GetBarterSessionAggregateType<T>>

    /**
     * Group by BarterSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarterSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarterSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarterSessionGroupByArgs['orderBy'] }
        : { orderBy?: BarterSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarterSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarterSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarterSession model
   */
  readonly fields: BarterSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarterSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarterSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    learner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends BarterSession$reviewArgs<ExtArgs> = {}>(args?: Subset<T, BarterSession$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BarterSession model
   */
  interface BarterSessionFieldRefs {
    readonly id: FieldRef<"BarterSession", 'String'>
    readonly teacherId: FieldRef<"BarterSession", 'String'>
    readonly learnerId: FieldRef<"BarterSession", 'String'>
    readonly skillId: FieldRef<"BarterSession", 'String'>
    readonly hours: FieldRef<"BarterSession", 'Int'>
    readonly status: FieldRef<"BarterSession", 'SessionStatus'>
    readonly scheduledAt: FieldRef<"BarterSession", 'DateTime'>
    readonly createdAt: FieldRef<"BarterSession", 'DateTime'>
    readonly updatedAt: FieldRef<"BarterSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BarterSession findUnique
   */
  export type BarterSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * Filter, which BarterSession to fetch.
     */
    where: BarterSessionWhereUniqueInput
  }

  /**
   * BarterSession findUniqueOrThrow
   */
  export type BarterSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * Filter, which BarterSession to fetch.
     */
    where: BarterSessionWhereUniqueInput
  }

  /**
   * BarterSession findFirst
   */
  export type BarterSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * Filter, which BarterSession to fetch.
     */
    where?: BarterSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarterSessions to fetch.
     */
    orderBy?: BarterSessionOrderByWithRelationInput | BarterSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarterSessions.
     */
    cursor?: BarterSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarterSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarterSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarterSessions.
     */
    distinct?: BarterSessionScalarFieldEnum | BarterSessionScalarFieldEnum[]
  }

  /**
   * BarterSession findFirstOrThrow
   */
  export type BarterSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * Filter, which BarterSession to fetch.
     */
    where?: BarterSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarterSessions to fetch.
     */
    orderBy?: BarterSessionOrderByWithRelationInput | BarterSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarterSessions.
     */
    cursor?: BarterSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarterSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarterSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarterSessions.
     */
    distinct?: BarterSessionScalarFieldEnum | BarterSessionScalarFieldEnum[]
  }

  /**
   * BarterSession findMany
   */
  export type BarterSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * Filter, which BarterSessions to fetch.
     */
    where?: BarterSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarterSessions to fetch.
     */
    orderBy?: BarterSessionOrderByWithRelationInput | BarterSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarterSessions.
     */
    cursor?: BarterSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarterSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarterSessions.
     */
    skip?: number
    distinct?: BarterSessionScalarFieldEnum | BarterSessionScalarFieldEnum[]
  }

  /**
   * BarterSession create
   */
  export type BarterSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a BarterSession.
     */
    data: XOR<BarterSessionCreateInput, BarterSessionUncheckedCreateInput>
  }

  /**
   * BarterSession createMany
   */
  export type BarterSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarterSessions.
     */
    data: BarterSessionCreateManyInput | BarterSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarterSession createManyAndReturn
   */
  export type BarterSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * The data used to create many BarterSessions.
     */
    data: BarterSessionCreateManyInput | BarterSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarterSession update
   */
  export type BarterSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a BarterSession.
     */
    data: XOR<BarterSessionUpdateInput, BarterSessionUncheckedUpdateInput>
    /**
     * Choose, which BarterSession to update.
     */
    where: BarterSessionWhereUniqueInput
  }

  /**
   * BarterSession updateMany
   */
  export type BarterSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarterSessions.
     */
    data: XOR<BarterSessionUpdateManyMutationInput, BarterSessionUncheckedUpdateManyInput>
    /**
     * Filter which BarterSessions to update
     */
    where?: BarterSessionWhereInput
    /**
     * Limit how many BarterSessions to update.
     */
    limit?: number
  }

  /**
   * BarterSession updateManyAndReturn
   */
  export type BarterSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * The data used to update BarterSessions.
     */
    data: XOR<BarterSessionUpdateManyMutationInput, BarterSessionUncheckedUpdateManyInput>
    /**
     * Filter which BarterSessions to update
     */
    where?: BarterSessionWhereInput
    /**
     * Limit how many BarterSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarterSession upsert
   */
  export type BarterSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the BarterSession to update in case it exists.
     */
    where: BarterSessionWhereUniqueInput
    /**
     * In case the BarterSession found by the `where` argument doesn't exist, create a new BarterSession with this data.
     */
    create: XOR<BarterSessionCreateInput, BarterSessionUncheckedCreateInput>
    /**
     * In case the BarterSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarterSessionUpdateInput, BarterSessionUncheckedUpdateInput>
  }

  /**
   * BarterSession delete
   */
  export type BarterSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    /**
     * Filter which BarterSession to delete.
     */
    where: BarterSessionWhereUniqueInput
  }

  /**
   * BarterSession deleteMany
   */
  export type BarterSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarterSessions to delete
     */
    where?: BarterSessionWhereInput
    /**
     * Limit how many BarterSessions to delete.
     */
    limit?: number
  }

  /**
   * BarterSession.review
   */
  export type BarterSession$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * BarterSession without action
   */
  export type BarterSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Skill$usersArgs<ExtArgs>
    barterSessions?: boolean | Skill$barterSessionsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Skill$usersArgs<ExtArgs>
    barterSessions?: boolean | Skill$barterSessionsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      users: Prisma.$UserSkillPayload<ExtArgs>[]
      barterSessions: Prisma.$BarterSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Skill$usersArgs<ExtArgs> = {}>(args?: Subset<T, Skill$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    barterSessions<T extends Skill$barterSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$barterSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarterSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.users
   */
  export type Skill$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * Skill.barterSessions
   */
  export type Skill$barterSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarterSession
     */
    select?: BarterSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarterSession
     */
    omit?: BarterSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarterSessionInclude<ExtArgs> | null
    where?: BarterSessionWhereInput
    orderBy?: BarterSessionOrderByWithRelationInput | BarterSessionOrderByWithRelationInput[]
    cursor?: BarterSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarterSessionScalarFieldEnum | BarterSessionScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model UserSkill
   */

  export type AggregateUserSkill = {
    _count: UserSkillCountAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  export type UserSkillMinAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
    type: $Enums.SkillType | null
    level: $Enums.SkillLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
    type: $Enums.SkillType | null
    level: $Enums.SkillLevel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillCountAggregateOutputType = {
    id: number
    userId: number
    skillId: number
    type: number
    level: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillMinAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    type?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillMaxAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    type?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillCountAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    type?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkill to aggregate.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkills
    **/
    _count?: true | UserSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillMaxAggregateInputType
  }

  export type GetUserSkillAggregateType<T extends UserSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkill[P]>
      : GetScalarType<T[P], AggregateUserSkill[P]>
  }




  export type UserSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithAggregationInput | UserSkillOrderByWithAggregationInput[]
    by: UserSkillScalarFieldEnum[] | UserSkillScalarFieldEnum
    having?: UserSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillCountAggregateInputType | true
    _min?: UserSkillMinAggregateInputType
    _max?: UserSkillMaxAggregateInputType
  }

  export type UserSkillGroupByOutputType = {
    id: string
    userId: string
    skillId: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt: Date
    updatedAt: Date
    _count: UserSkillCountAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  type GetUserSkillGroupByPayload<T extends UserSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    type?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    type?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    type?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectScalar = {
    id?: boolean
    userId?: boolean
    skillId?: boolean
    type?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillId" | "type" | "level" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkill"]>
  export type UserSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $UserSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      skillId: string
      type: $Enums.SkillType
      level: $Enums.SkillLevel
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSkill"]>
    composites: {}
  }

  type UserSkillGetPayload<S extends boolean | null | undefined | UserSkillDefaultArgs> = $Result.GetResult<Prisma.$UserSkillPayload, S>

  type UserSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillCountAggregateInputType | true
    }

  export interface UserSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkill'], meta: { name: 'UserSkill' } }
    /**
     * Find zero or one UserSkill that matches the filter.
     * @param {UserSkillFindUniqueArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillFindUniqueArgs>(args: SelectSubset<T, UserSkillFindUniqueArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillFindUniqueOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillFindFirstArgs>(args?: SelectSubset<T, UserSkillFindFirstArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkills
     * const userSkills = await prisma.userSkill.findMany()
     * 
     * // Get first 10 UserSkills
     * const userSkills = await prisma.userSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillFindManyArgs>(args?: SelectSubset<T, UserSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkill.
     * @param {UserSkillCreateArgs} args - Arguments to create a UserSkill.
     * @example
     * // Create one UserSkill
     * const UserSkill = await prisma.userSkill.create({
     *   data: {
     *     // ... data to create a UserSkill
     *   }
     * })
     * 
     */
    create<T extends UserSkillCreateArgs>(args: SelectSubset<T, UserSkillCreateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkills.
     * @param {UserSkillCreateManyArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillCreateManyArgs>(args?: SelectSubset<T, UserSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkills and returns the data saved in the database.
     * @param {UserSkillCreateManyAndReturnArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkill.
     * @param {UserSkillDeleteArgs} args - Arguments to delete one UserSkill.
     * @example
     * // Delete one UserSkill
     * const UserSkill = await prisma.userSkill.delete({
     *   where: {
     *     // ... filter to delete one UserSkill
     *   }
     * })
     * 
     */
    delete<T extends UserSkillDeleteArgs>(args: SelectSubset<T, UserSkillDeleteArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkill.
     * @param {UserSkillUpdateArgs} args - Arguments to update one UserSkill.
     * @example
     * // Update one UserSkill
     * const userSkill = await prisma.userSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillUpdateArgs>(args: SelectSubset<T, UserSkillUpdateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkills.
     * @param {UserSkillDeleteManyArgs} args - Arguments to filter UserSkills to delete.
     * @example
     * // Delete a few UserSkills
     * const { count } = await prisma.userSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillDeleteManyArgs>(args?: SelectSubset<T, UserSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillUpdateManyArgs>(args: SelectSubset<T, UserSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills and returns the data updated in the database.
     * @param {UserSkillUpdateManyAndReturnArgs} args - Arguments to update many UserSkills.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkill.
     * @param {UserSkillUpsertArgs} args - Arguments to update or create a UserSkill.
     * @example
     * // Update or create a UserSkill
     * const userSkill = await prisma.userSkill.upsert({
     *   create: {
     *     // ... data to create a UserSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkill we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillUpsertArgs>(args: SelectSubset<T, UserSkillUpsertArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillCountArgs} args - Arguments to filter UserSkills to count.
     * @example
     * // Count the number of UserSkills
     * const count = await prisma.userSkill.count({
     *   where: {
     *     // ... the filter for the UserSkills we want to count
     *   }
     * })
    **/
    count<T extends UserSkillCountArgs>(
      args?: Subset<T, UserSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSkillAggregateArgs>(args: Subset<T, UserSkillAggregateArgs>): Prisma.PrismaPromise<GetUserSkillAggregateType<T>>

    /**
     * Group by UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkill model
   */
  readonly fields: UserSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSkill model
   */
  interface UserSkillFieldRefs {
    readonly id: FieldRef<"UserSkill", 'String'>
    readonly userId: FieldRef<"UserSkill", 'String'>
    readonly skillId: FieldRef<"UserSkill", 'String'>
    readonly type: FieldRef<"UserSkill", 'SkillType'>
    readonly level: FieldRef<"UserSkill", 'SkillLevel'>
    readonly createdAt: FieldRef<"UserSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkill findUnique
   */
  export type UserSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findUniqueOrThrow
   */
  export type UserSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findFirst
   */
  export type UserSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findFirstOrThrow
   */
  export type UserSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findMany
   */
  export type UserSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkills to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill create
   */
  export type UserSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkill.
     */
    data: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
  }

  /**
   * UserSkill createMany
   */
  export type UserSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkill createManyAndReturn
   */
  export type UserSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill update
   */
  export type UserSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkill.
     */
    data: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
    /**
     * Choose, which UserSkill to update.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill updateMany
   */
  export type UserSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
  }

  /**
   * UserSkill updateManyAndReturn
   */
  export type UserSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill upsert
   */
  export type UserSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkill to update in case it exists.
     */
    where: UserSkillWhereUniqueInput
    /**
     * In case the UserSkill found by the `where` argument doesn't exist, create a new UserSkill with this data.
     */
    create: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
    /**
     * In case the UserSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
  }

  /**
   * UserSkill delete
   */
  export type UserSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter which UserSkill to delete.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill deleteMany
   */
  export type UserSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkills to delete
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to delete.
     */
    limit?: number
  }

  /**
   * UserSkill without action
   */
  export type UserSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    profileImg: 'profileImg',
    role: 'role',
    credits: 'credits',
    isActive: 'isActive',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    sessionId: 'sessionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const BarterSessionScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    learnerId: 'learnerId',
    skillId: 'skillId',
    hours: 'hours',
    status: 'status',
    scheduledAt: 'scheduledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BarterSessionScalarFieldEnum = (typeof BarterSessionScalarFieldEnum)[keyof typeof BarterSessionScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const UserSkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillId: 'skillId',
    type: 'type',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillScalarFieldEnum = (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'SkillType'
   */
  export type EnumSkillTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillType'>
    


  /**
   * Reference to a field of type 'SkillType[]'
   */
  export type ListEnumSkillTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillType[]'>
    


  /**
   * Reference to a field of type 'SkillLevel'
   */
  export type EnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel'>
    


  /**
   * Reference to a field of type 'SkillLevel[]'
   */
  export type ListEnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    profileImg?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    credits?: IntFilter<"User"> | number
    isActive?: EnumStatusFilter<"User"> | $Enums.Status
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessionAsTeacher?: BarterSessionListRelationFilter
    sessionAsStudent?: BarterSessionListRelationFilter
    userSkills?: UserSkillListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profileImg?: SortOrderInput | SortOrder
    role?: SortOrder
    credits?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessionAsTeacher?: BarterSessionOrderByRelationAggregateInput
    sessionAsStudent?: BarterSessionOrderByRelationAggregateInput
    userSkills?: UserSkillOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    profileImg?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    credits?: IntFilter<"User"> | number
    isActive?: EnumStatusFilter<"User"> | $Enums.Status
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessionAsTeacher?: BarterSessionListRelationFilter
    sessionAsStudent?: BarterSessionListRelationFilter
    userSkills?: UserSkillListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profileImg?: SortOrderInput | SortOrder
    role?: SortOrder
    credits?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImg?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    credits?: IntWithAggregatesFilter<"User"> | number
    isActive?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    sessionId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    session?: XOR<BarterSessionScalarRelationFilter, BarterSessionWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: BarterSessionOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    session?: XOR<BarterSessionScalarRelationFilter, BarterSessionWhereInput>
  }, "id" | "sessionId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    sessionId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type BarterSessionWhereInput = {
    AND?: BarterSessionWhereInput | BarterSessionWhereInput[]
    OR?: BarterSessionWhereInput[]
    NOT?: BarterSessionWhereInput | BarterSessionWhereInput[]
    id?: StringFilter<"BarterSession"> | string
    teacherId?: StringFilter<"BarterSession"> | string
    learnerId?: StringFilter<"BarterSession"> | string
    skillId?: StringFilter<"BarterSession"> | string
    hours?: IntFilter<"BarterSession"> | number
    status?: EnumSessionStatusFilter<"BarterSession"> | $Enums.SessionStatus
    scheduledAt?: DateTimeFilter<"BarterSession"> | Date | string
    createdAt?: DateTimeFilter<"BarterSession"> | Date | string
    updatedAt?: DateTimeFilter<"BarterSession"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    learner?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }

  export type BarterSessionOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    learnerId?: SortOrder
    skillId?: SortOrder
    hours?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    learner?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type BarterSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarterSessionWhereInput | BarterSessionWhereInput[]
    OR?: BarterSessionWhereInput[]
    NOT?: BarterSessionWhereInput | BarterSessionWhereInput[]
    teacherId?: StringFilter<"BarterSession"> | string
    learnerId?: StringFilter<"BarterSession"> | string
    skillId?: StringFilter<"BarterSession"> | string
    hours?: IntFilter<"BarterSession"> | number
    status?: EnumSessionStatusFilter<"BarterSession"> | $Enums.SessionStatus
    scheduledAt?: DateTimeFilter<"BarterSession"> | Date | string
    createdAt?: DateTimeFilter<"BarterSession"> | Date | string
    updatedAt?: DateTimeFilter<"BarterSession"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    learner?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }, "id">

  export type BarterSessionOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    learnerId?: SortOrder
    skillId?: SortOrder
    hours?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarterSessionCountOrderByAggregateInput
    _avg?: BarterSessionAvgOrderByAggregateInput
    _max?: BarterSessionMaxOrderByAggregateInput
    _min?: BarterSessionMinOrderByAggregateInput
    _sum?: BarterSessionSumOrderByAggregateInput
  }

  export type BarterSessionScalarWhereWithAggregatesInput = {
    AND?: BarterSessionScalarWhereWithAggregatesInput | BarterSessionScalarWhereWithAggregatesInput[]
    OR?: BarterSessionScalarWhereWithAggregatesInput[]
    NOT?: BarterSessionScalarWhereWithAggregatesInput | BarterSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BarterSession"> | string
    teacherId?: StringWithAggregatesFilter<"BarterSession"> | string
    learnerId?: StringWithAggregatesFilter<"BarterSession"> | string
    skillId?: StringWithAggregatesFilter<"BarterSession"> | string
    hours?: IntWithAggregatesFilter<"BarterSession"> | number
    status?: EnumSessionStatusWithAggregatesFilter<"BarterSession"> | $Enums.SessionStatus
    scheduledAt?: DateTimeWithAggregatesFilter<"BarterSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"BarterSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BarterSession"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    users?: UserSkillListRelationFilter
    barterSessions?: BarterSessionListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserSkillOrderByRelationAggregateInput
    barterSessions?: BarterSessionOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    users?: UserSkillListRelationFilter
    barterSessions?: BarterSessionListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type UserSkillWhereInput = {
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    userId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    type?: EnumSkillTypeFilter<"UserSkill"> | $Enums.SkillType
    level?: EnumSkillLevelFilter<"UserSkill"> | $Enums.SkillLevel
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type UserSkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type UserSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    userId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    type?: EnumSkillTypeFilter<"UserSkill"> | $Enums.SkillType
    level?: EnumSkillLevelFilter<"UserSkill"> | $Enums.SkillLevel
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id">

  export type UserSkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSkillCountOrderByAggregateInput
    _max?: UserSkillMaxOrderByAggregateInput
    _min?: UserSkillMinOrderByAggregateInput
  }

  export type UserSkillScalarWhereWithAggregatesInput = {
    AND?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    OR?: UserSkillScalarWhereWithAggregatesInput[]
    NOT?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkill"> | string
    userId?: StringWithAggregatesFilter<"UserSkill"> | string
    skillId?: StringWithAggregatesFilter<"UserSkill"> | string
    type?: EnumSkillTypeWithAggregatesFilter<"UserSkill"> | $Enums.SkillType
    level?: EnumSkillLevelWithAggregatesFilter<"UserSkill"> | $Enums.SkillLevel
    createdAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkill"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionAsTeacher?: BarterSessionCreateNestedManyWithoutTeacherInput
    sessionAsStudent?: BarterSessionCreateNestedManyWithoutLearnerInput
    userSkills?: UserSkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionAsTeacher?: BarterSessionUncheckedCreateNestedManyWithoutTeacherInput
    sessionAsStudent?: BarterSessionUncheckedCreateNestedManyWithoutLearnerInput
    userSkills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAsTeacher?: BarterSessionUpdateManyWithoutTeacherNestedInput
    sessionAsStudent?: BarterSessionUpdateManyWithoutLearnerNestedInput
    userSkills?: UserSkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAsTeacher?: BarterSessionUncheckedUpdateManyWithoutTeacherNestedInput
    sessionAsStudent?: BarterSessionUncheckedUpdateManyWithoutLearnerNestedInput
    userSkills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session: BarterSessionCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    sessionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: BarterSessionUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    sessionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarterSessionCreateInput = {
    id?: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutSessionAsTeacherInput
    learner: UserCreateNestedOneWithoutSessionAsStudentInput
    skill: SkillCreateNestedOneWithoutBarterSessionsInput
    review?: ReviewCreateNestedOneWithoutSessionInput
  }

  export type BarterSessionUncheckedCreateInput = {
    id?: string
    teacherId: string
    learnerId: string
    skillId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutSessionInput
  }

  export type BarterSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutSessionAsTeacherNestedInput
    learner?: UserUpdateOneRequiredWithoutSessionAsStudentNestedInput
    skill?: SkillUpdateOneRequiredWithoutBarterSessionsNestedInput
    review?: ReviewUpdateOneWithoutSessionNestedInput
  }

  export type BarterSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    learnerId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type BarterSessionCreateManyInput = {
    id?: string
    teacherId: string
    learnerId: string
    skillId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarterSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarterSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    learnerId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserSkillCreateNestedManyWithoutSkillInput
    barterSessions?: BarterSessionCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
    barterSessions?: BarterSessionUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSkillUpdateManyWithoutSkillNestedInput
    barterSessions?: BarterSessionUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
    barterSessions?: BarterSessionUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateInput = {
    id?: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSkillsInput
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type UserSkillUncheckedCreateInput = {
    id?: string
    userId: string
    skillId: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyInput = {
    id?: string
    userId: string
    skillId: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BarterSessionListRelationFilter = {
    every?: BarterSessionWhereInput
    some?: BarterSessionWhereInput
    none?: BarterSessionWhereInput
  }

  export type UserSkillListRelationFilter = {
    every?: UserSkillWhereInput
    some?: UserSkillWhereInput
    none?: UserSkillWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BarterSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    profileImg?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    profileImg?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    profileImg?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BarterSessionScalarRelationFilter = {
    is?: BarterSessionWhereInput
    isNot?: BarterSessionWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type BarterSessionCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    learnerId?: SortOrder
    skillId?: SortOrder
    hours?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarterSessionAvgOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type BarterSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    learnerId?: SortOrder
    skillId?: SortOrder
    hours?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarterSessionMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    learnerId?: SortOrder
    skillId?: SortOrder
    hours?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarterSessionSumOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSkillTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | EnumSkillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillTypeFilter<$PrismaModel> | $Enums.SkillType
  }

  export type EnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type UserSkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    type?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSkillTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | EnumSkillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel> | $Enums.SkillType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillTypeFilter<$PrismaModel>
    _max?: NestedEnumSkillTypeFilter<$PrismaModel>
  }

  export type EnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type BarterSessionCreateNestedManyWithoutTeacherInput = {
    create?: XOR<BarterSessionCreateWithoutTeacherInput, BarterSessionUncheckedCreateWithoutTeacherInput> | BarterSessionCreateWithoutTeacherInput[] | BarterSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutTeacherInput | BarterSessionCreateOrConnectWithoutTeacherInput[]
    createMany?: BarterSessionCreateManyTeacherInputEnvelope
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
  }

  export type BarterSessionCreateNestedManyWithoutLearnerInput = {
    create?: XOR<BarterSessionCreateWithoutLearnerInput, BarterSessionUncheckedCreateWithoutLearnerInput> | BarterSessionCreateWithoutLearnerInput[] | BarterSessionUncheckedCreateWithoutLearnerInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutLearnerInput | BarterSessionCreateOrConnectWithoutLearnerInput[]
    createMany?: BarterSessionCreateManyLearnerInputEnvelope
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
  }

  export type UserSkillCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type BarterSessionUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<BarterSessionCreateWithoutTeacherInput, BarterSessionUncheckedCreateWithoutTeacherInput> | BarterSessionCreateWithoutTeacherInput[] | BarterSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutTeacherInput | BarterSessionCreateOrConnectWithoutTeacherInput[]
    createMany?: BarterSessionCreateManyTeacherInputEnvelope
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
  }

  export type BarterSessionUncheckedCreateNestedManyWithoutLearnerInput = {
    create?: XOR<BarterSessionCreateWithoutLearnerInput, BarterSessionUncheckedCreateWithoutLearnerInput> | BarterSessionCreateWithoutLearnerInput[] | BarterSessionUncheckedCreateWithoutLearnerInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutLearnerInput | BarterSessionCreateOrConnectWithoutLearnerInput[]
    createMany?: BarterSessionCreateManyLearnerInputEnvelope
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BarterSessionUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<BarterSessionCreateWithoutTeacherInput, BarterSessionUncheckedCreateWithoutTeacherInput> | BarterSessionCreateWithoutTeacherInput[] | BarterSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutTeacherInput | BarterSessionCreateOrConnectWithoutTeacherInput[]
    upsert?: BarterSessionUpsertWithWhereUniqueWithoutTeacherInput | BarterSessionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: BarterSessionCreateManyTeacherInputEnvelope
    set?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    disconnect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    delete?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    update?: BarterSessionUpdateWithWhereUniqueWithoutTeacherInput | BarterSessionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: BarterSessionUpdateManyWithWhereWithoutTeacherInput | BarterSessionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: BarterSessionScalarWhereInput | BarterSessionScalarWhereInput[]
  }

  export type BarterSessionUpdateManyWithoutLearnerNestedInput = {
    create?: XOR<BarterSessionCreateWithoutLearnerInput, BarterSessionUncheckedCreateWithoutLearnerInput> | BarterSessionCreateWithoutLearnerInput[] | BarterSessionUncheckedCreateWithoutLearnerInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutLearnerInput | BarterSessionCreateOrConnectWithoutLearnerInput[]
    upsert?: BarterSessionUpsertWithWhereUniqueWithoutLearnerInput | BarterSessionUpsertWithWhereUniqueWithoutLearnerInput[]
    createMany?: BarterSessionCreateManyLearnerInputEnvelope
    set?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    disconnect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    delete?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    update?: BarterSessionUpdateWithWhereUniqueWithoutLearnerInput | BarterSessionUpdateWithWhereUniqueWithoutLearnerInput[]
    updateMany?: BarterSessionUpdateManyWithWhereWithoutLearnerInput | BarterSessionUpdateManyWithWhereWithoutLearnerInput[]
    deleteMany?: BarterSessionScalarWhereInput | BarterSessionScalarWhereInput[]
  }

  export type UserSkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserInput | UserSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserInput | UserSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserInput | UserSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type BarterSessionUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<BarterSessionCreateWithoutTeacherInput, BarterSessionUncheckedCreateWithoutTeacherInput> | BarterSessionCreateWithoutTeacherInput[] | BarterSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutTeacherInput | BarterSessionCreateOrConnectWithoutTeacherInput[]
    upsert?: BarterSessionUpsertWithWhereUniqueWithoutTeacherInput | BarterSessionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: BarterSessionCreateManyTeacherInputEnvelope
    set?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    disconnect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    delete?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    update?: BarterSessionUpdateWithWhereUniqueWithoutTeacherInput | BarterSessionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: BarterSessionUpdateManyWithWhereWithoutTeacherInput | BarterSessionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: BarterSessionScalarWhereInput | BarterSessionScalarWhereInput[]
  }

  export type BarterSessionUncheckedUpdateManyWithoutLearnerNestedInput = {
    create?: XOR<BarterSessionCreateWithoutLearnerInput, BarterSessionUncheckedCreateWithoutLearnerInput> | BarterSessionCreateWithoutLearnerInput[] | BarterSessionUncheckedCreateWithoutLearnerInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutLearnerInput | BarterSessionCreateOrConnectWithoutLearnerInput[]
    upsert?: BarterSessionUpsertWithWhereUniqueWithoutLearnerInput | BarterSessionUpsertWithWhereUniqueWithoutLearnerInput[]
    createMany?: BarterSessionCreateManyLearnerInputEnvelope
    set?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    disconnect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    delete?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    update?: BarterSessionUpdateWithWhereUniqueWithoutLearnerInput | BarterSessionUpdateWithWhereUniqueWithoutLearnerInput[]
    updateMany?: BarterSessionUpdateManyWithWhereWithoutLearnerInput | BarterSessionUpdateManyWithWhereWithoutLearnerInput[]
    deleteMany?: BarterSessionScalarWhereInput | BarterSessionScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput> | UserSkillCreateWithoutUserInput[] | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutUserInput | UserSkillCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutUserInput | UserSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutUserInput | UserSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutUserInput | UserSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type BarterSessionCreateNestedOneWithoutReviewInput = {
    create?: XOR<BarterSessionCreateWithoutReviewInput, BarterSessionUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BarterSessionCreateOrConnectWithoutReviewInput
    connect?: BarterSessionWhereUniqueInput
  }

  export type BarterSessionUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BarterSessionCreateWithoutReviewInput, BarterSessionUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BarterSessionCreateOrConnectWithoutReviewInput
    upsert?: BarterSessionUpsertWithoutReviewInput
    connect?: BarterSessionWhereUniqueInput
    update?: XOR<XOR<BarterSessionUpdateToOneWithWhereWithoutReviewInput, BarterSessionUpdateWithoutReviewInput>, BarterSessionUncheckedUpdateWithoutReviewInput>
  }

  export type UserCreateNestedOneWithoutSessionAsTeacherInput = {
    create?: XOR<UserCreateWithoutSessionAsTeacherInput, UserUncheckedCreateWithoutSessionAsTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionAsTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionAsStudentInput = {
    create?: XOR<UserCreateWithoutSessionAsStudentInput, UserUncheckedCreateWithoutSessionAsStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionAsStudentInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutBarterSessionsInput = {
    create?: XOR<SkillCreateWithoutBarterSessionsInput, SkillUncheckedCreateWithoutBarterSessionsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutBarterSessionsInput
    connect?: SkillWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutSessionInput = {
    create?: XOR<ReviewCreateWithoutSessionInput, ReviewUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSessionInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<ReviewCreateWithoutSessionInput, ReviewUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSessionInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type UserUpdateOneRequiredWithoutSessionAsTeacherNestedInput = {
    create?: XOR<UserCreateWithoutSessionAsTeacherInput, UserUncheckedCreateWithoutSessionAsTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionAsTeacherInput
    upsert?: UserUpsertWithoutSessionAsTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionAsTeacherInput, UserUpdateWithoutSessionAsTeacherInput>, UserUncheckedUpdateWithoutSessionAsTeacherInput>
  }

  export type UserUpdateOneRequiredWithoutSessionAsStudentNestedInput = {
    create?: XOR<UserCreateWithoutSessionAsStudentInput, UserUncheckedCreateWithoutSessionAsStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionAsStudentInput
    upsert?: UserUpsertWithoutSessionAsStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionAsStudentInput, UserUpdateWithoutSessionAsStudentInput>, UserUncheckedUpdateWithoutSessionAsStudentInput>
  }

  export type SkillUpdateOneRequiredWithoutBarterSessionsNestedInput = {
    create?: XOR<SkillCreateWithoutBarterSessionsInput, SkillUncheckedCreateWithoutBarterSessionsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutBarterSessionsInput
    upsert?: SkillUpsertWithoutBarterSessionsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutBarterSessionsInput, SkillUpdateWithoutBarterSessionsInput>, SkillUncheckedUpdateWithoutBarterSessionsInput>
  }

  export type ReviewUpdateOneWithoutSessionNestedInput = {
    create?: XOR<ReviewCreateWithoutSessionInput, ReviewUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSessionInput
    upsert?: ReviewUpsertWithoutSessionInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutSessionInput, ReviewUpdateWithoutSessionInput>, ReviewUncheckedUpdateWithoutSessionInput>
  }

  export type ReviewUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<ReviewCreateWithoutSessionInput, ReviewUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSessionInput
    upsert?: ReviewUpsertWithoutSessionInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutSessionInput, ReviewUpdateWithoutSessionInput>, ReviewUncheckedUpdateWithoutSessionInput>
  }

  export type UserSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type BarterSessionCreateNestedManyWithoutSkillInput = {
    create?: XOR<BarterSessionCreateWithoutSkillInput, BarterSessionUncheckedCreateWithoutSkillInput> | BarterSessionCreateWithoutSkillInput[] | BarterSessionUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutSkillInput | BarterSessionCreateOrConnectWithoutSkillInput[]
    createMany?: BarterSessionCreateManySkillInputEnvelope
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type BarterSessionUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<BarterSessionCreateWithoutSkillInput, BarterSessionUncheckedCreateWithoutSkillInput> | BarterSessionCreateWithoutSkillInput[] | BarterSessionUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutSkillInput | BarterSessionCreateOrConnectWithoutSkillInput[]
    createMany?: BarterSessionCreateManySkillInputEnvelope
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
  }

  export type UserSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutSkillInput | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutSkillInput | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutSkillInput | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type BarterSessionUpdateManyWithoutSkillNestedInput = {
    create?: XOR<BarterSessionCreateWithoutSkillInput, BarterSessionUncheckedCreateWithoutSkillInput> | BarterSessionCreateWithoutSkillInput[] | BarterSessionUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutSkillInput | BarterSessionCreateOrConnectWithoutSkillInput[]
    upsert?: BarterSessionUpsertWithWhereUniqueWithoutSkillInput | BarterSessionUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: BarterSessionCreateManySkillInputEnvelope
    set?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    disconnect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    delete?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    update?: BarterSessionUpdateWithWhereUniqueWithoutSkillInput | BarterSessionUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: BarterSessionUpdateManyWithWhereWithoutSkillInput | BarterSessionUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: BarterSessionScalarWhereInput | BarterSessionScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutSkillInput | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutSkillInput | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutSkillInput | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type BarterSessionUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<BarterSessionCreateWithoutSkillInput, BarterSessionUncheckedCreateWithoutSkillInput> | BarterSessionCreateWithoutSkillInput[] | BarterSessionUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: BarterSessionCreateOrConnectWithoutSkillInput | BarterSessionCreateOrConnectWithoutSkillInput[]
    upsert?: BarterSessionUpsertWithWhereUniqueWithoutSkillInput | BarterSessionUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: BarterSessionCreateManySkillInputEnvelope
    set?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    disconnect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    delete?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    connect?: BarterSessionWhereUniqueInput | BarterSessionWhereUniqueInput[]
    update?: BarterSessionUpdateWithWhereUniqueWithoutSkillInput | BarterSessionUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: BarterSessionUpdateManyWithWhereWithoutSkillInput | BarterSessionUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: BarterSessionScalarWhereInput | BarterSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserSkillsInput = {
    create?: XOR<UserCreateWithoutUserSkillsInput, UserUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutUsersInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    connect?: SkillWhereUniqueInput
  }

  export type EnumSkillTypeFieldUpdateOperationsInput = {
    set?: $Enums.SkillType
  }

  export type EnumSkillLevelFieldUpdateOperationsInput = {
    set?: $Enums.SkillLevel
  }

  export type UserUpdateOneRequiredWithoutUserSkillsNestedInput = {
    create?: XOR<UserCreateWithoutUserSkillsInput, UserUncheckedCreateWithoutUserSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSkillsInput
    upsert?: UserUpsertWithoutUserSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSkillsInput, UserUpdateWithoutUserSkillsInput>, UserUncheckedUpdateWithoutUserSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    upsert?: SkillUpsertWithoutUsersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutUsersInput, SkillUpdateWithoutUsersInput>, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedEnumSkillTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | EnumSkillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillTypeFilter<$PrismaModel> | $Enums.SkillType
  }

  export type NestedEnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | EnumSkillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel> | $Enums.SkillType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillTypeFilter<$PrismaModel>
    _max?: NestedEnumSkillTypeFilter<$PrismaModel>
  }

  export type NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type BarterSessionCreateWithoutTeacherInput = {
    id?: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    learner: UserCreateNestedOneWithoutSessionAsStudentInput
    skill: SkillCreateNestedOneWithoutBarterSessionsInput
    review?: ReviewCreateNestedOneWithoutSessionInput
  }

  export type BarterSessionUncheckedCreateWithoutTeacherInput = {
    id?: string
    learnerId: string
    skillId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutSessionInput
  }

  export type BarterSessionCreateOrConnectWithoutTeacherInput = {
    where: BarterSessionWhereUniqueInput
    create: XOR<BarterSessionCreateWithoutTeacherInput, BarterSessionUncheckedCreateWithoutTeacherInput>
  }

  export type BarterSessionCreateManyTeacherInputEnvelope = {
    data: BarterSessionCreateManyTeacherInput | BarterSessionCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type BarterSessionCreateWithoutLearnerInput = {
    id?: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutSessionAsTeacherInput
    skill: SkillCreateNestedOneWithoutBarterSessionsInput
    review?: ReviewCreateNestedOneWithoutSessionInput
  }

  export type BarterSessionUncheckedCreateWithoutLearnerInput = {
    id?: string
    teacherId: string
    skillId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutSessionInput
  }

  export type BarterSessionCreateOrConnectWithoutLearnerInput = {
    where: BarterSessionWhereUniqueInput
    create: XOR<BarterSessionCreateWithoutLearnerInput, BarterSessionUncheckedCreateWithoutLearnerInput>
  }

  export type BarterSessionCreateManyLearnerInputEnvelope = {
    data: BarterSessionCreateManyLearnerInput | BarterSessionCreateManyLearnerInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillCreateWithoutUserInput = {
    id?: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type UserSkillUncheckedCreateWithoutUserInput = {
    id?: string
    skillId: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserSkillCreateManyUserInputEnvelope = {
    data: UserSkillCreateManyUserInput | UserSkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BarterSessionUpsertWithWhereUniqueWithoutTeacherInput = {
    where: BarterSessionWhereUniqueInput
    update: XOR<BarterSessionUpdateWithoutTeacherInput, BarterSessionUncheckedUpdateWithoutTeacherInput>
    create: XOR<BarterSessionCreateWithoutTeacherInput, BarterSessionUncheckedCreateWithoutTeacherInput>
  }

  export type BarterSessionUpdateWithWhereUniqueWithoutTeacherInput = {
    where: BarterSessionWhereUniqueInput
    data: XOR<BarterSessionUpdateWithoutTeacherInput, BarterSessionUncheckedUpdateWithoutTeacherInput>
  }

  export type BarterSessionUpdateManyWithWhereWithoutTeacherInput = {
    where: BarterSessionScalarWhereInput
    data: XOR<BarterSessionUpdateManyMutationInput, BarterSessionUncheckedUpdateManyWithoutTeacherInput>
  }

  export type BarterSessionScalarWhereInput = {
    AND?: BarterSessionScalarWhereInput | BarterSessionScalarWhereInput[]
    OR?: BarterSessionScalarWhereInput[]
    NOT?: BarterSessionScalarWhereInput | BarterSessionScalarWhereInput[]
    id?: StringFilter<"BarterSession"> | string
    teacherId?: StringFilter<"BarterSession"> | string
    learnerId?: StringFilter<"BarterSession"> | string
    skillId?: StringFilter<"BarterSession"> | string
    hours?: IntFilter<"BarterSession"> | number
    status?: EnumSessionStatusFilter<"BarterSession"> | $Enums.SessionStatus
    scheduledAt?: DateTimeFilter<"BarterSession"> | Date | string
    createdAt?: DateTimeFilter<"BarterSession"> | Date | string
    updatedAt?: DateTimeFilter<"BarterSession"> | Date | string
  }

  export type BarterSessionUpsertWithWhereUniqueWithoutLearnerInput = {
    where: BarterSessionWhereUniqueInput
    update: XOR<BarterSessionUpdateWithoutLearnerInput, BarterSessionUncheckedUpdateWithoutLearnerInput>
    create: XOR<BarterSessionCreateWithoutLearnerInput, BarterSessionUncheckedCreateWithoutLearnerInput>
  }

  export type BarterSessionUpdateWithWhereUniqueWithoutLearnerInput = {
    where: BarterSessionWhereUniqueInput
    data: XOR<BarterSessionUpdateWithoutLearnerInput, BarterSessionUncheckedUpdateWithoutLearnerInput>
  }

  export type BarterSessionUpdateManyWithWhereWithoutLearnerInput = {
    where: BarterSessionScalarWhereInput
    data: XOR<BarterSessionUpdateManyMutationInput, BarterSessionUncheckedUpdateManyWithoutLearnerInput>
  }

  export type UserSkillUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutUserInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSkillScalarWhereInput = {
    AND?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    OR?: UserSkillScalarWhereInput[]
    NOT?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    userId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    type?: EnumSkillTypeFilter<"UserSkill"> | $Enums.SkillType
    level?: EnumSkillLevelFilter<"UserSkill"> | $Enums.SkillLevel
    createdAt?: DateTimeFilter<"UserSkill"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkill"> | Date | string
  }

  export type BarterSessionCreateWithoutReviewInput = {
    id?: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutSessionAsTeacherInput
    learner: UserCreateNestedOneWithoutSessionAsStudentInput
    skill: SkillCreateNestedOneWithoutBarterSessionsInput
  }

  export type BarterSessionUncheckedCreateWithoutReviewInput = {
    id?: string
    teacherId: string
    learnerId: string
    skillId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarterSessionCreateOrConnectWithoutReviewInput = {
    where: BarterSessionWhereUniqueInput
    create: XOR<BarterSessionCreateWithoutReviewInput, BarterSessionUncheckedCreateWithoutReviewInput>
  }

  export type BarterSessionUpsertWithoutReviewInput = {
    update: XOR<BarterSessionUpdateWithoutReviewInput, BarterSessionUncheckedUpdateWithoutReviewInput>
    create: XOR<BarterSessionCreateWithoutReviewInput, BarterSessionUncheckedCreateWithoutReviewInput>
    where?: BarterSessionWhereInput
  }

  export type BarterSessionUpdateToOneWithWhereWithoutReviewInput = {
    where?: BarterSessionWhereInput
    data: XOR<BarterSessionUpdateWithoutReviewInput, BarterSessionUncheckedUpdateWithoutReviewInput>
  }

  export type BarterSessionUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutSessionAsTeacherNestedInput
    learner?: UserUpdateOneRequiredWithoutSessionAsStudentNestedInput
    skill?: SkillUpdateOneRequiredWithoutBarterSessionsNestedInput
  }

  export type BarterSessionUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    learnerId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSessionAsTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionAsStudent?: BarterSessionCreateNestedManyWithoutLearnerInput
    userSkills?: UserSkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionAsTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionAsStudent?: BarterSessionUncheckedCreateNestedManyWithoutLearnerInput
    userSkills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionAsTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionAsTeacherInput, UserUncheckedCreateWithoutSessionAsTeacherInput>
  }

  export type UserCreateWithoutSessionAsStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionAsTeacher?: BarterSessionCreateNestedManyWithoutTeacherInput
    userSkills?: UserSkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionAsStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionAsTeacher?: BarterSessionUncheckedCreateNestedManyWithoutTeacherInput
    userSkills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionAsStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionAsStudentInput, UserUncheckedCreateWithoutSessionAsStudentInput>
  }

  export type SkillCreateWithoutBarterSessionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutBarterSessionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutBarterSessionsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutBarterSessionsInput, SkillUncheckedCreateWithoutBarterSessionsInput>
  }

  export type ReviewCreateWithoutSessionInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutSessionInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutSessionInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutSessionInput, ReviewUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionAsTeacherInput = {
    update: XOR<UserUpdateWithoutSessionAsTeacherInput, UserUncheckedUpdateWithoutSessionAsTeacherInput>
    create: XOR<UserCreateWithoutSessionAsTeacherInput, UserUncheckedCreateWithoutSessionAsTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionAsTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionAsTeacherInput, UserUncheckedUpdateWithoutSessionAsTeacherInput>
  }

  export type UserUpdateWithoutSessionAsTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAsStudent?: BarterSessionUpdateManyWithoutLearnerNestedInput
    userSkills?: UserSkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionAsTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAsStudent?: BarterSessionUncheckedUpdateManyWithoutLearnerNestedInput
    userSkills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSessionAsStudentInput = {
    update: XOR<UserUpdateWithoutSessionAsStudentInput, UserUncheckedUpdateWithoutSessionAsStudentInput>
    create: XOR<UserCreateWithoutSessionAsStudentInput, UserUncheckedCreateWithoutSessionAsStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionAsStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionAsStudentInput, UserUncheckedUpdateWithoutSessionAsStudentInput>
  }

  export type UserUpdateWithoutSessionAsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAsTeacher?: BarterSessionUpdateManyWithoutTeacherNestedInput
    userSkills?: UserSkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionAsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAsTeacher?: BarterSessionUncheckedUpdateManyWithoutTeacherNestedInput
    userSkills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillUpsertWithoutBarterSessionsInput = {
    update: XOR<SkillUpdateWithoutBarterSessionsInput, SkillUncheckedUpdateWithoutBarterSessionsInput>
    create: XOR<SkillCreateWithoutBarterSessionsInput, SkillUncheckedCreateWithoutBarterSessionsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutBarterSessionsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutBarterSessionsInput, SkillUncheckedUpdateWithoutBarterSessionsInput>
  }

  export type SkillUpdateWithoutBarterSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutBarterSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type ReviewUpsertWithoutSessionInput = {
    update: XOR<ReviewUpdateWithoutSessionInput, ReviewUncheckedUpdateWithoutSessionInput>
    create: XOR<ReviewCreateWithoutSessionInput, ReviewUncheckedCreateWithoutSessionInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutSessionInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutSessionInput, ReviewUncheckedUpdateWithoutSessionInput>
  }

  export type ReviewUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateWithoutSkillInput = {
    id?: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSkillsInput
  }

  export type UserSkillUncheckedCreateWithoutSkillInput = {
    id?: string
    userId: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateOrConnectWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillCreateManySkillInputEnvelope = {
    data: UserSkillCreateManySkillInput | UserSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type BarterSessionCreateWithoutSkillInput = {
    id?: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutSessionAsTeacherInput
    learner: UserCreateNestedOneWithoutSessionAsStudentInput
    review?: ReviewCreateNestedOneWithoutSessionInput
  }

  export type BarterSessionUncheckedCreateWithoutSkillInput = {
    id?: string
    teacherId: string
    learnerId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutSessionInput
  }

  export type BarterSessionCreateOrConnectWithoutSkillInput = {
    where: BarterSessionWhereUniqueInput
    create: XOR<BarterSessionCreateWithoutSkillInput, BarterSessionUncheckedCreateWithoutSkillInput>
  }

  export type BarterSessionCreateManySkillInputEnvelope = {
    data: BarterSessionCreateManySkillInput | BarterSessionCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutSkillInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type BarterSessionUpsertWithWhereUniqueWithoutSkillInput = {
    where: BarterSessionWhereUniqueInput
    update: XOR<BarterSessionUpdateWithoutSkillInput, BarterSessionUncheckedUpdateWithoutSkillInput>
    create: XOR<BarterSessionCreateWithoutSkillInput, BarterSessionUncheckedCreateWithoutSkillInput>
  }

  export type BarterSessionUpdateWithWhereUniqueWithoutSkillInput = {
    where: BarterSessionWhereUniqueInput
    data: XOR<BarterSessionUpdateWithoutSkillInput, BarterSessionUncheckedUpdateWithoutSkillInput>
  }

  export type BarterSessionUpdateManyWithWhereWithoutSkillInput = {
    where: BarterSessionScalarWhereInput
    data: XOR<BarterSessionUpdateManyMutationInput, BarterSessionUncheckedUpdateManyWithoutSkillInput>
  }

  export type UserCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionAsTeacher?: BarterSessionCreateNestedManyWithoutTeacherInput
    sessionAsStudent?: BarterSessionCreateNestedManyWithoutLearnerInput
  }

  export type UserUncheckedCreateWithoutUserSkillsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    profileImg?: string | null
    role?: $Enums.Role
    credits?: number
    isActive?: $Enums.Status
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionAsTeacher?: BarterSessionUncheckedCreateNestedManyWithoutTeacherInput
    sessionAsStudent?: BarterSessionUncheckedCreateNestedManyWithoutLearnerInput
  }

  export type UserCreateOrConnectWithoutUserSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSkillsInput, UserUncheckedCreateWithoutUserSkillsInput>
  }

  export type SkillCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barterSessions?: BarterSessionCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barterSessions?: BarterSessionUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutUsersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutUserSkillsInput = {
    update: XOR<UserUpdateWithoutUserSkillsInput, UserUncheckedUpdateWithoutUserSkillsInput>
    create: XOR<UserCreateWithoutUserSkillsInput, UserUncheckedCreateWithoutUserSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSkillsInput, UserUncheckedUpdateWithoutUserSkillsInput>
  }

  export type UserUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAsTeacher?: BarterSessionUpdateManyWithoutTeacherNestedInput
    sessionAsStudent?: BarterSessionUpdateManyWithoutLearnerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImg?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    isActive?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionAsTeacher?: BarterSessionUncheckedUpdateManyWithoutTeacherNestedInput
    sessionAsStudent?: BarterSessionUncheckedUpdateManyWithoutLearnerNestedInput
  }

  export type SkillUpsertWithoutUsersInput = {
    update: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutUsersInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type SkillUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barterSessions?: BarterSessionUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barterSessions?: BarterSessionUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type BarterSessionCreateManyTeacherInput = {
    id?: string
    learnerId: string
    skillId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarterSessionCreateManyLearnerInput = {
    id?: string
    teacherId: string
    skillId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillCreateManyUserInput = {
    id?: string
    skillId: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarterSessionUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    learner?: UserUpdateOneRequiredWithoutSessionAsStudentNestedInput
    skill?: SkillUpdateOneRequiredWithoutBarterSessionsNestedInput
    review?: ReviewUpdateOneWithoutSessionNestedInput
  }

  export type BarterSessionUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    learnerId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type BarterSessionUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    learnerId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarterSessionUpdateWithoutLearnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutSessionAsTeacherNestedInput
    skill?: SkillUpdateOneRequiredWithoutBarterSessionsNestedInput
    review?: ReviewUpdateOneWithoutSessionNestedInput
  }

  export type BarterSessionUncheckedUpdateWithoutLearnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type BarterSessionUncheckedUpdateManyWithoutLearnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManySkillInput = {
    id?: string
    userId: string
    type: $Enums.SkillType
    level: $Enums.SkillLevel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarterSessionCreateManySkillInput = {
    id?: string
    teacherId: string
    learnerId: string
    hours: number
    status?: $Enums.SessionStatus
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarterSessionUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutSessionAsTeacherNestedInput
    learner?: UserUpdateOneRequiredWithoutSessionAsStudentNestedInput
    review?: ReviewUpdateOneWithoutSessionNestedInput
  }

  export type BarterSessionUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    learnerId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type BarterSessionUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    learnerId?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}