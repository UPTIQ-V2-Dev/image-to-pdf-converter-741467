
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model ConversionJob
 * 
 */
export type ConversionJob = $Result.DefaultSelection<Prisma.$ConversionJobPayload>
/**
 * Model ConversionImage
 * 
 */
export type ConversionImage = $Result.DefaultSelection<Prisma.$ConversionImagePayload>
/**
 * Model ConversionHistory
 * 
 */
export type ConversionHistory = $Result.DefaultSelection<Prisma.$ConversionHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TokenType: {
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

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
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversionJob`: Exposes CRUD operations for the **ConversionJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversionJobs
    * const conversionJobs = await prisma.conversionJob.findMany()
    * ```
    */
  get conversionJob(): Prisma.ConversionJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversionImage`: Exposes CRUD operations for the **ConversionImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversionImages
    * const conversionImages = await prisma.conversionImage.findMany()
    * ```
    */
  get conversionImage(): Prisma.ConversionImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversionHistory`: Exposes CRUD operations for the **ConversionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversionHistories
    * const conversionHistories = await prisma.conversionHistory.findMany()
    * ```
    */
  get conversionHistory(): Prisma.ConversionHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Token: 'Token',
    ConversionJob: 'ConversionJob',
    ConversionImage: 'ConversionImage',
    ConversionHistory: 'ConversionHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "token" | "conversionJob" | "conversionImage" | "conversionHistory"
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
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      ConversionJob: {
        payload: Prisma.$ConversionJobPayload<ExtArgs>
        fields: Prisma.ConversionJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversionJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversionJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>
          }
          findFirst: {
            args: Prisma.ConversionJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversionJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>
          }
          findMany: {
            args: Prisma.ConversionJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>[]
          }
          create: {
            args: Prisma.ConversionJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>
          }
          createMany: {
            args: Prisma.ConversionJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversionJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>[]
          }
          delete: {
            args: Prisma.ConversionJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>
          }
          update: {
            args: Prisma.ConversionJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>
          }
          deleteMany: {
            args: Prisma.ConversionJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversionJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversionJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>[]
          }
          upsert: {
            args: Prisma.ConversionJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionJobPayload>
          }
          aggregate: {
            args: Prisma.ConversionJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversionJob>
          }
          groupBy: {
            args: Prisma.ConversionJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversionJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversionJobCountArgs<ExtArgs>
            result: $Utils.Optional<ConversionJobCountAggregateOutputType> | number
          }
        }
      }
      ConversionImage: {
        payload: Prisma.$ConversionImagePayload<ExtArgs>
        fields: Prisma.ConversionImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversionImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversionImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>
          }
          findFirst: {
            args: Prisma.ConversionImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversionImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>
          }
          findMany: {
            args: Prisma.ConversionImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>[]
          }
          create: {
            args: Prisma.ConversionImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>
          }
          createMany: {
            args: Prisma.ConversionImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversionImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>[]
          }
          delete: {
            args: Prisma.ConversionImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>
          }
          update: {
            args: Prisma.ConversionImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>
          }
          deleteMany: {
            args: Prisma.ConversionImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversionImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversionImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>[]
          }
          upsert: {
            args: Prisma.ConversionImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionImagePayload>
          }
          aggregate: {
            args: Prisma.ConversionImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversionImage>
          }
          groupBy: {
            args: Prisma.ConversionImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversionImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversionImageCountArgs<ExtArgs>
            result: $Utils.Optional<ConversionImageCountAggregateOutputType> | number
          }
        }
      }
      ConversionHistory: {
        payload: Prisma.$ConversionHistoryPayload<ExtArgs>
        fields: Prisma.ConversionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          findFirst: {
            args: Prisma.ConversionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          findMany: {
            args: Prisma.ConversionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>[]
          }
          create: {
            args: Prisma.ConversionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          createMany: {
            args: Prisma.ConversionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>[]
          }
          delete: {
            args: Prisma.ConversionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          update: {
            args: Prisma.ConversionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ConversionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ConversionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversionHistoryPayload>
          }
          aggregate: {
            args: Prisma.ConversionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversionHistory>
          }
          groupBy: {
            args: Prisma.ConversionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ConversionHistoryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    token?: TokenOmit
    conversionJob?: ConversionJobOmit
    conversionImage?: ConversionImageOmit
    conversionHistory?: ConversionHistoryOmit
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
    Token: number
    conversionJobs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Token?: boolean | UserCountOutputTypeCountTokenArgs
    conversionJobs?: boolean | UserCountOutputTypeCountConversionJobsArgs
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
  export type UserCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversionJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionJobWhereInput
  }


  /**
   * Count Type ConversionJobCountOutputType
   */

  export type ConversionJobCountOutputType = {
    images: number
  }

  export type ConversionJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ConversionJobCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ConversionJobCountOutputType without action
   */
  export type ConversionJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJobCountOutputType
     */
    select?: ConversionJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversionJobCountOutputType without action
   */
  export type ConversionJobCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionImageWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
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
    id: number
    email: string
    name: string | null
    password: string
    role: $Enums.Role
    isEmailVerified: boolean
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
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Token?: boolean | User$TokenArgs<ExtArgs>
    conversionJobs?: boolean | User$conversionJobsArgs<ExtArgs>
    conversionHistory?: boolean | User$conversionHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "isEmailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Token?: boolean | User$TokenArgs<ExtArgs>
    conversionJobs?: boolean | User$conversionJobsArgs<ExtArgs>
    conversionHistory?: boolean | User$conversionHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Token: Prisma.$TokenPayload<ExtArgs>[]
      conversionJobs: Prisma.$ConversionJobPayload<ExtArgs>[]
      conversionHistory: Prisma.$ConversionHistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      role: $Enums.Role
      isEmailVerified: boolean
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
    Token<T extends User$TokenArgs<ExtArgs> = {}>(args?: Subset<T, User$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversionJobs<T extends User$conversionJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversionJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversionHistory<T extends User$conversionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$conversionHistoryArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
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
   * User.Token
   */
  export type User$TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.conversionJobs
   */
  export type User$conversionJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    where?: ConversionJobWhereInput
    orderBy?: ConversionJobOrderByWithRelationInput | ConversionJobOrderByWithRelationInput[]
    cursor?: ConversionJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversionJobScalarFieldEnum | ConversionJobScalarFieldEnum[]
  }

  /**
   * User.conversionHistory
   */
  export type User$conversionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    where?: ConversionHistoryWhereInput
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
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    type: $Enums.TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    type: $Enums.TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expires: number
    blacklisted: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    token: string
    type: $Enums.TokenType
    expires: Date
    blacklisted: boolean
    createdAt: Date
    userId: number
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "type" | "expires" | "blacklisted" | "createdAt" | "userId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      type: $Enums.TokenType
      expires: Date
      blacklisted: boolean
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expires: FieldRef<"Token", 'DateTime'>
    readonly blacklisted: FieldRef<"Token", 'Boolean'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model ConversionJob
   */

  export type AggregateConversionJob = {
    _count: ConversionJobCountAggregateOutputType | null
    _avg: ConversionJobAvgAggregateOutputType | null
    _sum: ConversionJobSumAggregateOutputType | null
    _min: ConversionJobMinAggregateOutputType | null
    _max: ConversionJobMaxAggregateOutputType | null
  }

  export type ConversionJobAvgAggregateOutputType = {
    userId: number | null
    fileSize: number | null
  }

  export type ConversionJobSumAggregateOutputType = {
    userId: number | null
    fileSize: number | null
  }

  export type ConversionJobMinAggregateOutputType = {
    id: string | null
    userId: number | null
    status: string | null
    createdAt: Date | null
    completedAt: Date | null
    filename: string | null
    fileSize: number | null
    downloadUrl: string | null
    error: string | null
  }

  export type ConversionJobMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    status: string | null
    createdAt: Date | null
    completedAt: Date | null
    filename: string | null
    fileSize: number | null
    downloadUrl: string | null
    error: string | null
  }

  export type ConversionJobCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    settings: number
    createdAt: number
    completedAt: number
    filename: number
    fileSize: number
    downloadUrl: number
    error: number
    _all: number
  }


  export type ConversionJobAvgAggregateInputType = {
    userId?: true
    fileSize?: true
  }

  export type ConversionJobSumAggregateInputType = {
    userId?: true
    fileSize?: true
  }

  export type ConversionJobMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    createdAt?: true
    completedAt?: true
    filename?: true
    fileSize?: true
    downloadUrl?: true
    error?: true
  }

  export type ConversionJobMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    createdAt?: true
    completedAt?: true
    filename?: true
    fileSize?: true
    downloadUrl?: true
    error?: true
  }

  export type ConversionJobCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    settings?: true
    createdAt?: true
    completedAt?: true
    filename?: true
    fileSize?: true
    downloadUrl?: true
    error?: true
    _all?: true
  }

  export type ConversionJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionJob to aggregate.
     */
    where?: ConversionJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionJobs to fetch.
     */
    orderBy?: ConversionJobOrderByWithRelationInput | ConversionJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversionJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversionJobs
    **/
    _count?: true | ConversionJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversionJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversionJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversionJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversionJobMaxAggregateInputType
  }

  export type GetConversionJobAggregateType<T extends ConversionJobAggregateArgs> = {
        [P in keyof T & keyof AggregateConversionJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversionJob[P]>
      : GetScalarType<T[P], AggregateConversionJob[P]>
  }




  export type ConversionJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionJobWhereInput
    orderBy?: ConversionJobOrderByWithAggregationInput | ConversionJobOrderByWithAggregationInput[]
    by: ConversionJobScalarFieldEnum[] | ConversionJobScalarFieldEnum
    having?: ConversionJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversionJobCountAggregateInputType | true
    _avg?: ConversionJobAvgAggregateInputType
    _sum?: ConversionJobSumAggregateInputType
    _min?: ConversionJobMinAggregateInputType
    _max?: ConversionJobMaxAggregateInputType
  }

  export type ConversionJobGroupByOutputType = {
    id: string
    userId: number
    status: string
    settings: JsonValue
    createdAt: Date
    completedAt: Date | null
    filename: string | null
    fileSize: number | null
    downloadUrl: string | null
    error: string | null
    _count: ConversionJobCountAggregateOutputType | null
    _avg: ConversionJobAvgAggregateOutputType | null
    _sum: ConversionJobSumAggregateOutputType | null
    _min: ConversionJobMinAggregateOutputType | null
    _max: ConversionJobMaxAggregateOutputType | null
  }

  type GetConversionJobGroupByPayload<T extends ConversionJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversionJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversionJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversionJobGroupByOutputType[P]>
            : GetScalarType<T[P], ConversionJobGroupByOutputType[P]>
        }
      >
    >


  export type ConversionJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    settings?: boolean
    createdAt?: boolean
    completedAt?: boolean
    filename?: boolean
    fileSize?: boolean
    downloadUrl?: boolean
    error?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | ConversionJob$imagesArgs<ExtArgs>
    _count?: boolean | ConversionJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionJob"]>

  export type ConversionJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    settings?: boolean
    createdAt?: boolean
    completedAt?: boolean
    filename?: boolean
    fileSize?: boolean
    downloadUrl?: boolean
    error?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionJob"]>

  export type ConversionJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    settings?: boolean
    createdAt?: boolean
    completedAt?: boolean
    filename?: boolean
    fileSize?: boolean
    downloadUrl?: boolean
    error?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionJob"]>

  export type ConversionJobSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    settings?: boolean
    createdAt?: boolean
    completedAt?: boolean
    filename?: boolean
    fileSize?: boolean
    downloadUrl?: boolean
    error?: boolean
  }

  export type ConversionJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "settings" | "createdAt" | "completedAt" | "filename" | "fileSize" | "downloadUrl" | "error", ExtArgs["result"]["conversionJob"]>
  export type ConversionJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    images?: boolean | ConversionJob$imagesArgs<ExtArgs>
    _count?: boolean | ConversionJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversionJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversionJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversionJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversionJob"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      images: Prisma.$ConversionImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      status: string
      settings: Prisma.JsonValue
      createdAt: Date
      completedAt: Date | null
      filename: string | null
      fileSize: number | null
      downloadUrl: string | null
      error: string | null
    }, ExtArgs["result"]["conversionJob"]>
    composites: {}
  }

  type ConversionJobGetPayload<S extends boolean | null | undefined | ConversionJobDefaultArgs> = $Result.GetResult<Prisma.$ConversionJobPayload, S>

  type ConversionJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversionJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversionJobCountAggregateInputType | true
    }

  export interface ConversionJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversionJob'], meta: { name: 'ConversionJob' } }
    /**
     * Find zero or one ConversionJob that matches the filter.
     * @param {ConversionJobFindUniqueArgs} args - Arguments to find a ConversionJob
     * @example
     * // Get one ConversionJob
     * const conversionJob = await prisma.conversionJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversionJobFindUniqueArgs>(args: SelectSubset<T, ConversionJobFindUniqueArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversionJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversionJobFindUniqueOrThrowArgs} args - Arguments to find a ConversionJob
     * @example
     * // Get one ConversionJob
     * const conversionJob = await prisma.conversionJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversionJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversionJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversionJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobFindFirstArgs} args - Arguments to find a ConversionJob
     * @example
     * // Get one ConversionJob
     * const conversionJob = await prisma.conversionJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversionJobFindFirstArgs>(args?: SelectSubset<T, ConversionJobFindFirstArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversionJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobFindFirstOrThrowArgs} args - Arguments to find a ConversionJob
     * @example
     * // Get one ConversionJob
     * const conversionJob = await prisma.conversionJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversionJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversionJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversionJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversionJobs
     * const conversionJobs = await prisma.conversionJob.findMany()
     * 
     * // Get first 10 ConversionJobs
     * const conversionJobs = await prisma.conversionJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversionJobWithIdOnly = await prisma.conversionJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversionJobFindManyArgs>(args?: SelectSubset<T, ConversionJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversionJob.
     * @param {ConversionJobCreateArgs} args - Arguments to create a ConversionJob.
     * @example
     * // Create one ConversionJob
     * const ConversionJob = await prisma.conversionJob.create({
     *   data: {
     *     // ... data to create a ConversionJob
     *   }
     * })
     * 
     */
    create<T extends ConversionJobCreateArgs>(args: SelectSubset<T, ConversionJobCreateArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversionJobs.
     * @param {ConversionJobCreateManyArgs} args - Arguments to create many ConversionJobs.
     * @example
     * // Create many ConversionJobs
     * const conversionJob = await prisma.conversionJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversionJobCreateManyArgs>(args?: SelectSubset<T, ConversionJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversionJobs and returns the data saved in the database.
     * @param {ConversionJobCreateManyAndReturnArgs} args - Arguments to create many ConversionJobs.
     * @example
     * // Create many ConversionJobs
     * const conversionJob = await prisma.conversionJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversionJobs and only return the `id`
     * const conversionJobWithIdOnly = await prisma.conversionJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversionJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversionJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversionJob.
     * @param {ConversionJobDeleteArgs} args - Arguments to delete one ConversionJob.
     * @example
     * // Delete one ConversionJob
     * const ConversionJob = await prisma.conversionJob.delete({
     *   where: {
     *     // ... filter to delete one ConversionJob
     *   }
     * })
     * 
     */
    delete<T extends ConversionJobDeleteArgs>(args: SelectSubset<T, ConversionJobDeleteArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversionJob.
     * @param {ConversionJobUpdateArgs} args - Arguments to update one ConversionJob.
     * @example
     * // Update one ConversionJob
     * const conversionJob = await prisma.conversionJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversionJobUpdateArgs>(args: SelectSubset<T, ConversionJobUpdateArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversionJobs.
     * @param {ConversionJobDeleteManyArgs} args - Arguments to filter ConversionJobs to delete.
     * @example
     * // Delete a few ConversionJobs
     * const { count } = await prisma.conversionJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversionJobDeleteManyArgs>(args?: SelectSubset<T, ConversionJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversionJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversionJobs
     * const conversionJob = await prisma.conversionJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversionJobUpdateManyArgs>(args: SelectSubset<T, ConversionJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversionJobs and returns the data updated in the database.
     * @param {ConversionJobUpdateManyAndReturnArgs} args - Arguments to update many ConversionJobs.
     * @example
     * // Update many ConversionJobs
     * const conversionJob = await prisma.conversionJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversionJobs and only return the `id`
     * const conversionJobWithIdOnly = await prisma.conversionJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversionJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversionJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversionJob.
     * @param {ConversionJobUpsertArgs} args - Arguments to update or create a ConversionJob.
     * @example
     * // Update or create a ConversionJob
     * const conversionJob = await prisma.conversionJob.upsert({
     *   create: {
     *     // ... data to create a ConversionJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversionJob we want to update
     *   }
     * })
     */
    upsert<T extends ConversionJobUpsertArgs>(args: SelectSubset<T, ConversionJobUpsertArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversionJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobCountArgs} args - Arguments to filter ConversionJobs to count.
     * @example
     * // Count the number of ConversionJobs
     * const count = await prisma.conversionJob.count({
     *   where: {
     *     // ... the filter for the ConversionJobs we want to count
     *   }
     * })
    **/
    count<T extends ConversionJobCountArgs>(
      args?: Subset<T, ConversionJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversionJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversionJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversionJobAggregateArgs>(args: Subset<T, ConversionJobAggregateArgs>): Prisma.PrismaPromise<GetConversionJobAggregateType<T>>

    /**
     * Group by ConversionJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobGroupByArgs} args - Group by arguments.
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
      T extends ConversionJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversionJobGroupByArgs['orderBy'] }
        : { orderBy?: ConversionJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversionJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversionJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversionJob model
   */
  readonly fields: ConversionJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversionJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversionJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends ConversionJob$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ConversionJob$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ConversionJob model
   */
  interface ConversionJobFieldRefs {
    readonly id: FieldRef<"ConversionJob", 'String'>
    readonly userId: FieldRef<"ConversionJob", 'Int'>
    readonly status: FieldRef<"ConversionJob", 'String'>
    readonly settings: FieldRef<"ConversionJob", 'Json'>
    readonly createdAt: FieldRef<"ConversionJob", 'DateTime'>
    readonly completedAt: FieldRef<"ConversionJob", 'DateTime'>
    readonly filename: FieldRef<"ConversionJob", 'String'>
    readonly fileSize: FieldRef<"ConversionJob", 'Int'>
    readonly downloadUrl: FieldRef<"ConversionJob", 'String'>
    readonly error: FieldRef<"ConversionJob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConversionJob findUnique
   */
  export type ConversionJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * Filter, which ConversionJob to fetch.
     */
    where: ConversionJobWhereUniqueInput
  }

  /**
   * ConversionJob findUniqueOrThrow
   */
  export type ConversionJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * Filter, which ConversionJob to fetch.
     */
    where: ConversionJobWhereUniqueInput
  }

  /**
   * ConversionJob findFirst
   */
  export type ConversionJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * Filter, which ConversionJob to fetch.
     */
    where?: ConversionJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionJobs to fetch.
     */
    orderBy?: ConversionJobOrderByWithRelationInput | ConversionJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversionJobs.
     */
    cursor?: ConversionJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversionJobs.
     */
    distinct?: ConversionJobScalarFieldEnum | ConversionJobScalarFieldEnum[]
  }

  /**
   * ConversionJob findFirstOrThrow
   */
  export type ConversionJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * Filter, which ConversionJob to fetch.
     */
    where?: ConversionJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionJobs to fetch.
     */
    orderBy?: ConversionJobOrderByWithRelationInput | ConversionJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversionJobs.
     */
    cursor?: ConversionJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversionJobs.
     */
    distinct?: ConversionJobScalarFieldEnum | ConversionJobScalarFieldEnum[]
  }

  /**
   * ConversionJob findMany
   */
  export type ConversionJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * Filter, which ConversionJobs to fetch.
     */
    where?: ConversionJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionJobs to fetch.
     */
    orderBy?: ConversionJobOrderByWithRelationInput | ConversionJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversionJobs.
     */
    cursor?: ConversionJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionJobs.
     */
    skip?: number
    distinct?: ConversionJobScalarFieldEnum | ConversionJobScalarFieldEnum[]
  }

  /**
   * ConversionJob create
   */
  export type ConversionJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversionJob.
     */
    data: XOR<ConversionJobCreateInput, ConversionJobUncheckedCreateInput>
  }

  /**
   * ConversionJob createMany
   */
  export type ConversionJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversionJobs.
     */
    data: ConversionJobCreateManyInput | ConversionJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversionJob createManyAndReturn
   */
  export type ConversionJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * The data used to create many ConversionJobs.
     */
    data: ConversionJobCreateManyInput | ConversionJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversionJob update
   */
  export type ConversionJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversionJob.
     */
    data: XOR<ConversionJobUpdateInput, ConversionJobUncheckedUpdateInput>
    /**
     * Choose, which ConversionJob to update.
     */
    where: ConversionJobWhereUniqueInput
  }

  /**
   * ConversionJob updateMany
   */
  export type ConversionJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversionJobs.
     */
    data: XOR<ConversionJobUpdateManyMutationInput, ConversionJobUncheckedUpdateManyInput>
    /**
     * Filter which ConversionJobs to update
     */
    where?: ConversionJobWhereInput
    /**
     * Limit how many ConversionJobs to update.
     */
    limit?: number
  }

  /**
   * ConversionJob updateManyAndReturn
   */
  export type ConversionJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * The data used to update ConversionJobs.
     */
    data: XOR<ConversionJobUpdateManyMutationInput, ConversionJobUncheckedUpdateManyInput>
    /**
     * Filter which ConversionJobs to update
     */
    where?: ConversionJobWhereInput
    /**
     * Limit how many ConversionJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversionJob upsert
   */
  export type ConversionJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversionJob to update in case it exists.
     */
    where: ConversionJobWhereUniqueInput
    /**
     * In case the ConversionJob found by the `where` argument doesn't exist, create a new ConversionJob with this data.
     */
    create: XOR<ConversionJobCreateInput, ConversionJobUncheckedCreateInput>
    /**
     * In case the ConversionJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversionJobUpdateInput, ConversionJobUncheckedUpdateInput>
  }

  /**
   * ConversionJob delete
   */
  export type ConversionJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
    /**
     * Filter which ConversionJob to delete.
     */
    where: ConversionJobWhereUniqueInput
  }

  /**
   * ConversionJob deleteMany
   */
  export type ConversionJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionJobs to delete
     */
    where?: ConversionJobWhereInput
    /**
     * Limit how many ConversionJobs to delete.
     */
    limit?: number
  }

  /**
   * ConversionJob.images
   */
  export type ConversionJob$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    where?: ConversionImageWhereInput
    orderBy?: ConversionImageOrderByWithRelationInput | ConversionImageOrderByWithRelationInput[]
    cursor?: ConversionImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversionImageScalarFieldEnum | ConversionImageScalarFieldEnum[]
  }

  /**
   * ConversionJob without action
   */
  export type ConversionJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: ConversionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: ConversionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionJobInclude<ExtArgs> | null
  }


  /**
   * Model ConversionImage
   */

  export type AggregateConversionImage = {
    _count: ConversionImageCountAggregateOutputType | null
    _avg: ConversionImageAvgAggregateOutputType | null
    _sum: ConversionImageSumAggregateOutputType | null
    _min: ConversionImageMinAggregateOutputType | null
    _max: ConversionImageMaxAggregateOutputType | null
  }

  export type ConversionImageAvgAggregateOutputType = {
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type ConversionImageSumAggregateOutputType = {
    fileSize: number | null
    width: number | null
    height: number | null
  }

  export type ConversionImageMinAggregateOutputType = {
    id: string | null
    conversionJobId: string | null
    originalName: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    width: number | null
    height: number | null
    storageUrl: string | null
    createdAt: Date | null
  }

  export type ConversionImageMaxAggregateOutputType = {
    id: string | null
    conversionJobId: string | null
    originalName: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    width: number | null
    height: number | null
    storageUrl: string | null
    createdAt: Date | null
  }

  export type ConversionImageCountAggregateOutputType = {
    id: number
    conversionJobId: number
    originalName: number
    fileName: number
    fileSize: number
    mimeType: number
    width: number
    height: number
    storageUrl: number
    createdAt: number
    _all: number
  }


  export type ConversionImageAvgAggregateInputType = {
    fileSize?: true
    width?: true
    height?: true
  }

  export type ConversionImageSumAggregateInputType = {
    fileSize?: true
    width?: true
    height?: true
  }

  export type ConversionImageMinAggregateInputType = {
    id?: true
    conversionJobId?: true
    originalName?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    width?: true
    height?: true
    storageUrl?: true
    createdAt?: true
  }

  export type ConversionImageMaxAggregateInputType = {
    id?: true
    conversionJobId?: true
    originalName?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    width?: true
    height?: true
    storageUrl?: true
    createdAt?: true
  }

  export type ConversionImageCountAggregateInputType = {
    id?: true
    conversionJobId?: true
    originalName?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    width?: true
    height?: true
    storageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ConversionImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionImage to aggregate.
     */
    where?: ConversionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionImages to fetch.
     */
    orderBy?: ConversionImageOrderByWithRelationInput | ConversionImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversionImages
    **/
    _count?: true | ConversionImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversionImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversionImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversionImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversionImageMaxAggregateInputType
  }

  export type GetConversionImageAggregateType<T extends ConversionImageAggregateArgs> = {
        [P in keyof T & keyof AggregateConversionImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversionImage[P]>
      : GetScalarType<T[P], AggregateConversionImage[P]>
  }




  export type ConversionImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionImageWhereInput
    orderBy?: ConversionImageOrderByWithAggregationInput | ConversionImageOrderByWithAggregationInput[]
    by: ConversionImageScalarFieldEnum[] | ConversionImageScalarFieldEnum
    having?: ConversionImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversionImageCountAggregateInputType | true
    _avg?: ConversionImageAvgAggregateInputType
    _sum?: ConversionImageSumAggregateInputType
    _min?: ConversionImageMinAggregateInputType
    _max?: ConversionImageMaxAggregateInputType
  }

  export type ConversionImageGroupByOutputType = {
    id: string
    conversionJobId: string
    originalName: string
    fileName: string
    fileSize: number
    mimeType: string
    width: number | null
    height: number | null
    storageUrl: string
    createdAt: Date
    _count: ConversionImageCountAggregateOutputType | null
    _avg: ConversionImageAvgAggregateOutputType | null
    _sum: ConversionImageSumAggregateOutputType | null
    _min: ConversionImageMinAggregateOutputType | null
    _max: ConversionImageMaxAggregateOutputType | null
  }

  type GetConversionImageGroupByPayload<T extends ConversionImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversionImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversionImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversionImageGroupByOutputType[P]>
            : GetScalarType<T[P], ConversionImageGroupByOutputType[P]>
        }
      >
    >


  export type ConversionImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversionJobId?: boolean
    originalName?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    storageUrl?: boolean
    createdAt?: boolean
    conversionJob?: boolean | ConversionJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionImage"]>

  export type ConversionImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversionJobId?: boolean
    originalName?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    storageUrl?: boolean
    createdAt?: boolean
    conversionJob?: boolean | ConversionJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionImage"]>

  export type ConversionImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversionJobId?: boolean
    originalName?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    storageUrl?: boolean
    createdAt?: boolean
    conversionJob?: boolean | ConversionJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionImage"]>

  export type ConversionImageSelectScalar = {
    id?: boolean
    conversionJobId?: boolean
    originalName?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    width?: boolean
    height?: boolean
    storageUrl?: boolean
    createdAt?: boolean
  }

  export type ConversionImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversionJobId" | "originalName" | "fileName" | "fileSize" | "mimeType" | "width" | "height" | "storageUrl" | "createdAt", ExtArgs["result"]["conversionImage"]>
  export type ConversionImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversionJob?: boolean | ConversionJobDefaultArgs<ExtArgs>
  }
  export type ConversionImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversionJob?: boolean | ConversionJobDefaultArgs<ExtArgs>
  }
  export type ConversionImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversionJob?: boolean | ConversionJobDefaultArgs<ExtArgs>
  }

  export type $ConversionImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversionImage"
    objects: {
      conversionJob: Prisma.$ConversionJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversionJobId: string
      originalName: string
      fileName: string
      fileSize: number
      mimeType: string
      width: number | null
      height: number | null
      storageUrl: string
      createdAt: Date
    }, ExtArgs["result"]["conversionImage"]>
    composites: {}
  }

  type ConversionImageGetPayload<S extends boolean | null | undefined | ConversionImageDefaultArgs> = $Result.GetResult<Prisma.$ConversionImagePayload, S>

  type ConversionImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversionImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversionImageCountAggregateInputType | true
    }

  export interface ConversionImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversionImage'], meta: { name: 'ConversionImage' } }
    /**
     * Find zero or one ConversionImage that matches the filter.
     * @param {ConversionImageFindUniqueArgs} args - Arguments to find a ConversionImage
     * @example
     * // Get one ConversionImage
     * const conversionImage = await prisma.conversionImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversionImageFindUniqueArgs>(args: SelectSubset<T, ConversionImageFindUniqueArgs<ExtArgs>>): Prisma__ConversionImageClient<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversionImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversionImageFindUniqueOrThrowArgs} args - Arguments to find a ConversionImage
     * @example
     * // Get one ConversionImage
     * const conversionImage = await prisma.conversionImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversionImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversionImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversionImageClient<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversionImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionImageFindFirstArgs} args - Arguments to find a ConversionImage
     * @example
     * // Get one ConversionImage
     * const conversionImage = await prisma.conversionImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversionImageFindFirstArgs>(args?: SelectSubset<T, ConversionImageFindFirstArgs<ExtArgs>>): Prisma__ConversionImageClient<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversionImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionImageFindFirstOrThrowArgs} args - Arguments to find a ConversionImage
     * @example
     * // Get one ConversionImage
     * const conversionImage = await prisma.conversionImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversionImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversionImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversionImageClient<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversionImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversionImages
     * const conversionImages = await prisma.conversionImage.findMany()
     * 
     * // Get first 10 ConversionImages
     * const conversionImages = await prisma.conversionImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversionImageWithIdOnly = await prisma.conversionImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversionImageFindManyArgs>(args?: SelectSubset<T, ConversionImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversionImage.
     * @param {ConversionImageCreateArgs} args - Arguments to create a ConversionImage.
     * @example
     * // Create one ConversionImage
     * const ConversionImage = await prisma.conversionImage.create({
     *   data: {
     *     // ... data to create a ConversionImage
     *   }
     * })
     * 
     */
    create<T extends ConversionImageCreateArgs>(args: SelectSubset<T, ConversionImageCreateArgs<ExtArgs>>): Prisma__ConversionImageClient<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversionImages.
     * @param {ConversionImageCreateManyArgs} args - Arguments to create many ConversionImages.
     * @example
     * // Create many ConversionImages
     * const conversionImage = await prisma.conversionImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversionImageCreateManyArgs>(args?: SelectSubset<T, ConversionImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversionImages and returns the data saved in the database.
     * @param {ConversionImageCreateManyAndReturnArgs} args - Arguments to create many ConversionImages.
     * @example
     * // Create many ConversionImages
     * const conversionImage = await prisma.conversionImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversionImages and only return the `id`
     * const conversionImageWithIdOnly = await prisma.conversionImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversionImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversionImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversionImage.
     * @param {ConversionImageDeleteArgs} args - Arguments to delete one ConversionImage.
     * @example
     * // Delete one ConversionImage
     * const ConversionImage = await prisma.conversionImage.delete({
     *   where: {
     *     // ... filter to delete one ConversionImage
     *   }
     * })
     * 
     */
    delete<T extends ConversionImageDeleteArgs>(args: SelectSubset<T, ConversionImageDeleteArgs<ExtArgs>>): Prisma__ConversionImageClient<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversionImage.
     * @param {ConversionImageUpdateArgs} args - Arguments to update one ConversionImage.
     * @example
     * // Update one ConversionImage
     * const conversionImage = await prisma.conversionImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversionImageUpdateArgs>(args: SelectSubset<T, ConversionImageUpdateArgs<ExtArgs>>): Prisma__ConversionImageClient<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversionImages.
     * @param {ConversionImageDeleteManyArgs} args - Arguments to filter ConversionImages to delete.
     * @example
     * // Delete a few ConversionImages
     * const { count } = await prisma.conversionImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversionImageDeleteManyArgs>(args?: SelectSubset<T, ConversionImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversionImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversionImages
     * const conversionImage = await prisma.conversionImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversionImageUpdateManyArgs>(args: SelectSubset<T, ConversionImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversionImages and returns the data updated in the database.
     * @param {ConversionImageUpdateManyAndReturnArgs} args - Arguments to update many ConversionImages.
     * @example
     * // Update many ConversionImages
     * const conversionImage = await prisma.conversionImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversionImages and only return the `id`
     * const conversionImageWithIdOnly = await prisma.conversionImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversionImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversionImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversionImage.
     * @param {ConversionImageUpsertArgs} args - Arguments to update or create a ConversionImage.
     * @example
     * // Update or create a ConversionImage
     * const conversionImage = await prisma.conversionImage.upsert({
     *   create: {
     *     // ... data to create a ConversionImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversionImage we want to update
     *   }
     * })
     */
    upsert<T extends ConversionImageUpsertArgs>(args: SelectSubset<T, ConversionImageUpsertArgs<ExtArgs>>): Prisma__ConversionImageClient<$Result.GetResult<Prisma.$ConversionImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversionImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionImageCountArgs} args - Arguments to filter ConversionImages to count.
     * @example
     * // Count the number of ConversionImages
     * const count = await prisma.conversionImage.count({
     *   where: {
     *     // ... the filter for the ConversionImages we want to count
     *   }
     * })
    **/
    count<T extends ConversionImageCountArgs>(
      args?: Subset<T, ConversionImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversionImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversionImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversionImageAggregateArgs>(args: Subset<T, ConversionImageAggregateArgs>): Prisma.PrismaPromise<GetConversionImageAggregateType<T>>

    /**
     * Group by ConversionImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionImageGroupByArgs} args - Group by arguments.
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
      T extends ConversionImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversionImageGroupByArgs['orderBy'] }
        : { orderBy?: ConversionImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversionImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversionImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversionImage model
   */
  readonly fields: ConversionImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversionImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversionImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversionJob<T extends ConversionJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversionJobDefaultArgs<ExtArgs>>): Prisma__ConversionJobClient<$Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConversionImage model
   */
  interface ConversionImageFieldRefs {
    readonly id: FieldRef<"ConversionImage", 'String'>
    readonly conversionJobId: FieldRef<"ConversionImage", 'String'>
    readonly originalName: FieldRef<"ConversionImage", 'String'>
    readonly fileName: FieldRef<"ConversionImage", 'String'>
    readonly fileSize: FieldRef<"ConversionImage", 'Int'>
    readonly mimeType: FieldRef<"ConversionImage", 'String'>
    readonly width: FieldRef<"ConversionImage", 'Int'>
    readonly height: FieldRef<"ConversionImage", 'Int'>
    readonly storageUrl: FieldRef<"ConversionImage", 'String'>
    readonly createdAt: FieldRef<"ConversionImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConversionImage findUnique
   */
  export type ConversionImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * Filter, which ConversionImage to fetch.
     */
    where: ConversionImageWhereUniqueInput
  }

  /**
   * ConversionImage findUniqueOrThrow
   */
  export type ConversionImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * Filter, which ConversionImage to fetch.
     */
    where: ConversionImageWhereUniqueInput
  }

  /**
   * ConversionImage findFirst
   */
  export type ConversionImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * Filter, which ConversionImage to fetch.
     */
    where?: ConversionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionImages to fetch.
     */
    orderBy?: ConversionImageOrderByWithRelationInput | ConversionImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversionImages.
     */
    cursor?: ConversionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversionImages.
     */
    distinct?: ConversionImageScalarFieldEnum | ConversionImageScalarFieldEnum[]
  }

  /**
   * ConversionImage findFirstOrThrow
   */
  export type ConversionImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * Filter, which ConversionImage to fetch.
     */
    where?: ConversionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionImages to fetch.
     */
    orderBy?: ConversionImageOrderByWithRelationInput | ConversionImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversionImages.
     */
    cursor?: ConversionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversionImages.
     */
    distinct?: ConversionImageScalarFieldEnum | ConversionImageScalarFieldEnum[]
  }

  /**
   * ConversionImage findMany
   */
  export type ConversionImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * Filter, which ConversionImages to fetch.
     */
    where?: ConversionImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionImages to fetch.
     */
    orderBy?: ConversionImageOrderByWithRelationInput | ConversionImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversionImages.
     */
    cursor?: ConversionImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionImages.
     */
    skip?: number
    distinct?: ConversionImageScalarFieldEnum | ConversionImageScalarFieldEnum[]
  }

  /**
   * ConversionImage create
   */
  export type ConversionImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversionImage.
     */
    data: XOR<ConversionImageCreateInput, ConversionImageUncheckedCreateInput>
  }

  /**
   * ConversionImage createMany
   */
  export type ConversionImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversionImages.
     */
    data: ConversionImageCreateManyInput | ConversionImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversionImage createManyAndReturn
   */
  export type ConversionImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * The data used to create many ConversionImages.
     */
    data: ConversionImageCreateManyInput | ConversionImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversionImage update
   */
  export type ConversionImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversionImage.
     */
    data: XOR<ConversionImageUpdateInput, ConversionImageUncheckedUpdateInput>
    /**
     * Choose, which ConversionImage to update.
     */
    where: ConversionImageWhereUniqueInput
  }

  /**
   * ConversionImage updateMany
   */
  export type ConversionImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversionImages.
     */
    data: XOR<ConversionImageUpdateManyMutationInput, ConversionImageUncheckedUpdateManyInput>
    /**
     * Filter which ConversionImages to update
     */
    where?: ConversionImageWhereInput
    /**
     * Limit how many ConversionImages to update.
     */
    limit?: number
  }

  /**
   * ConversionImage updateManyAndReturn
   */
  export type ConversionImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * The data used to update ConversionImages.
     */
    data: XOR<ConversionImageUpdateManyMutationInput, ConversionImageUncheckedUpdateManyInput>
    /**
     * Filter which ConversionImages to update
     */
    where?: ConversionImageWhereInput
    /**
     * Limit how many ConversionImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversionImage upsert
   */
  export type ConversionImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversionImage to update in case it exists.
     */
    where: ConversionImageWhereUniqueInput
    /**
     * In case the ConversionImage found by the `where` argument doesn't exist, create a new ConversionImage with this data.
     */
    create: XOR<ConversionImageCreateInput, ConversionImageUncheckedCreateInput>
    /**
     * In case the ConversionImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversionImageUpdateInput, ConversionImageUncheckedUpdateInput>
  }

  /**
   * ConversionImage delete
   */
  export type ConversionImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
    /**
     * Filter which ConversionImage to delete.
     */
    where: ConversionImageWhereUniqueInput
  }

  /**
   * ConversionImage deleteMany
   */
  export type ConversionImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionImages to delete
     */
    where?: ConversionImageWhereInput
    /**
     * Limit how many ConversionImages to delete.
     */
    limit?: number
  }

  /**
   * ConversionImage without action
   */
  export type ConversionImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionImage
     */
    select?: ConversionImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionImage
     */
    omit?: ConversionImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionImageInclude<ExtArgs> | null
  }


  /**
   * Model ConversionHistory
   */

  export type AggregateConversionHistory = {
    _count: ConversionHistoryCountAggregateOutputType | null
    _avg: ConversionHistoryAvgAggregateOutputType | null
    _sum: ConversionHistorySumAggregateOutputType | null
    _min: ConversionHistoryMinAggregateOutputType | null
    _max: ConversionHistoryMaxAggregateOutputType | null
  }

  export type ConversionHistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    totalJobs: number | null
    successJobs: number | null
    failedJobs: number | null
  }

  export type ConversionHistorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    totalJobs: number | null
    successJobs: number | null
    failedJobs: number | null
  }

  export type ConversionHistoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    totalJobs: number | null
    successJobs: number | null
    failedJobs: number | null
    lastJobDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversionHistoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    totalJobs: number | null
    successJobs: number | null
    failedJobs: number | null
    lastJobDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversionHistoryCountAggregateOutputType = {
    id: number
    userId: number
    totalJobs: number
    successJobs: number
    failedJobs: number
    lastJobDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversionHistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    totalJobs?: true
    successJobs?: true
    failedJobs?: true
  }

  export type ConversionHistorySumAggregateInputType = {
    id?: true
    userId?: true
    totalJobs?: true
    successJobs?: true
    failedJobs?: true
  }

  export type ConversionHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    totalJobs?: true
    successJobs?: true
    failedJobs?: true
    lastJobDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversionHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    totalJobs?: true
    successJobs?: true
    failedJobs?: true
    lastJobDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversionHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    totalJobs?: true
    successJobs?: true
    failedJobs?: true
    lastJobDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionHistory to aggregate.
     */
    where?: ConversionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionHistories to fetch.
     */
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversionHistories
    **/
    _count?: true | ConversionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversionHistoryMaxAggregateInputType
  }

  export type GetConversionHistoryAggregateType<T extends ConversionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateConversionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversionHistory[P]>
      : GetScalarType<T[P], AggregateConversionHistory[P]>
  }




  export type ConversionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversionHistoryWhereInput
    orderBy?: ConversionHistoryOrderByWithAggregationInput | ConversionHistoryOrderByWithAggregationInput[]
    by: ConversionHistoryScalarFieldEnum[] | ConversionHistoryScalarFieldEnum
    having?: ConversionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversionHistoryCountAggregateInputType | true
    _avg?: ConversionHistoryAvgAggregateInputType
    _sum?: ConversionHistorySumAggregateInputType
    _min?: ConversionHistoryMinAggregateInputType
    _max?: ConversionHistoryMaxAggregateInputType
  }

  export type ConversionHistoryGroupByOutputType = {
    id: number
    userId: number
    totalJobs: number
    successJobs: number
    failedJobs: number
    lastJobDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ConversionHistoryCountAggregateOutputType | null
    _avg: ConversionHistoryAvgAggregateOutputType | null
    _sum: ConversionHistorySumAggregateOutputType | null
    _min: ConversionHistoryMinAggregateOutputType | null
    _max: ConversionHistoryMaxAggregateOutputType | null
  }

  type GetConversionHistoryGroupByPayload<T extends ConversionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ConversionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ConversionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalJobs?: boolean
    successJobs?: boolean
    failedJobs?: boolean
    lastJobDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionHistory"]>

  export type ConversionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalJobs?: boolean
    successJobs?: boolean
    failedJobs?: boolean
    lastJobDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionHistory"]>

  export type ConversionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalJobs?: boolean
    successJobs?: boolean
    failedJobs?: boolean
    lastJobDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversionHistory"]>

  export type ConversionHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    totalJobs?: boolean
    successJobs?: boolean
    failedJobs?: boolean
    lastJobDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalJobs" | "successJobs" | "failedJobs" | "lastJobDate" | "createdAt" | "updatedAt", ExtArgs["result"]["conversionHistory"]>
  export type ConversionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversionHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      totalJobs: number
      successJobs: number
      failedJobs: number
      lastJobDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversionHistory"]>
    composites: {}
  }

  type ConversionHistoryGetPayload<S extends boolean | null | undefined | ConversionHistoryDefaultArgs> = $Result.GetResult<Prisma.$ConversionHistoryPayload, S>

  type ConversionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversionHistoryCountAggregateInputType | true
    }

  export interface ConversionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversionHistory'], meta: { name: 'ConversionHistory' } }
    /**
     * Find zero or one ConversionHistory that matches the filter.
     * @param {ConversionHistoryFindUniqueArgs} args - Arguments to find a ConversionHistory
     * @example
     * // Get one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversionHistoryFindUniqueArgs>(args: SelectSubset<T, ConversionHistoryFindUniqueArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversionHistoryFindUniqueOrThrowArgs} args - Arguments to find a ConversionHistory
     * @example
     * // Get one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryFindFirstArgs} args - Arguments to find a ConversionHistory
     * @example
     * // Get one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversionHistoryFindFirstArgs>(args?: SelectSubset<T, ConversionHistoryFindFirstArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryFindFirstOrThrowArgs} args - Arguments to find a ConversionHistory
     * @example
     * // Get one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversionHistories
     * const conversionHistories = await prisma.conversionHistory.findMany()
     * 
     * // Get first 10 ConversionHistories
     * const conversionHistories = await prisma.conversionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversionHistoryWithIdOnly = await prisma.conversionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversionHistoryFindManyArgs>(args?: SelectSubset<T, ConversionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversionHistory.
     * @param {ConversionHistoryCreateArgs} args - Arguments to create a ConversionHistory.
     * @example
     * // Create one ConversionHistory
     * const ConversionHistory = await prisma.conversionHistory.create({
     *   data: {
     *     // ... data to create a ConversionHistory
     *   }
     * })
     * 
     */
    create<T extends ConversionHistoryCreateArgs>(args: SelectSubset<T, ConversionHistoryCreateArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversionHistories.
     * @param {ConversionHistoryCreateManyArgs} args - Arguments to create many ConversionHistories.
     * @example
     * // Create many ConversionHistories
     * const conversionHistory = await prisma.conversionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversionHistoryCreateManyArgs>(args?: SelectSubset<T, ConversionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversionHistories and returns the data saved in the database.
     * @param {ConversionHistoryCreateManyAndReturnArgs} args - Arguments to create many ConversionHistories.
     * @example
     * // Create many ConversionHistories
     * const conversionHistory = await prisma.conversionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversionHistories and only return the `id`
     * const conversionHistoryWithIdOnly = await prisma.conversionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversionHistory.
     * @param {ConversionHistoryDeleteArgs} args - Arguments to delete one ConversionHistory.
     * @example
     * // Delete one ConversionHistory
     * const ConversionHistory = await prisma.conversionHistory.delete({
     *   where: {
     *     // ... filter to delete one ConversionHistory
     *   }
     * })
     * 
     */
    delete<T extends ConversionHistoryDeleteArgs>(args: SelectSubset<T, ConversionHistoryDeleteArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversionHistory.
     * @param {ConversionHistoryUpdateArgs} args - Arguments to update one ConversionHistory.
     * @example
     * // Update one ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversionHistoryUpdateArgs>(args: SelectSubset<T, ConversionHistoryUpdateArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversionHistories.
     * @param {ConversionHistoryDeleteManyArgs} args - Arguments to filter ConversionHistories to delete.
     * @example
     * // Delete a few ConversionHistories
     * const { count } = await prisma.conversionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversionHistoryDeleteManyArgs>(args?: SelectSubset<T, ConversionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversionHistories
     * const conversionHistory = await prisma.conversionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversionHistoryUpdateManyArgs>(args: SelectSubset<T, ConversionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversionHistories and returns the data updated in the database.
     * @param {ConversionHistoryUpdateManyAndReturnArgs} args - Arguments to update many ConversionHistories.
     * @example
     * // Update many ConversionHistories
     * const conversionHistory = await prisma.conversionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversionHistories and only return the `id`
     * const conversionHistoryWithIdOnly = await prisma.conversionHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversionHistory.
     * @param {ConversionHistoryUpsertArgs} args - Arguments to update or create a ConversionHistory.
     * @example
     * // Update or create a ConversionHistory
     * const conversionHistory = await prisma.conversionHistory.upsert({
     *   create: {
     *     // ... data to create a ConversionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversionHistory we want to update
     *   }
     * })
     */
    upsert<T extends ConversionHistoryUpsertArgs>(args: SelectSubset<T, ConversionHistoryUpsertArgs<ExtArgs>>): Prisma__ConversionHistoryClient<$Result.GetResult<Prisma.$ConversionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryCountArgs} args - Arguments to filter ConversionHistories to count.
     * @example
     * // Count the number of ConversionHistories
     * const count = await prisma.conversionHistory.count({
     *   where: {
     *     // ... the filter for the ConversionHistories we want to count
     *   }
     * })
    **/
    count<T extends ConversionHistoryCountArgs>(
      args?: Subset<T, ConversionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversionHistoryAggregateArgs>(args: Subset<T, ConversionHistoryAggregateArgs>): Prisma.PrismaPromise<GetConversionHistoryAggregateType<T>>

    /**
     * Group by ConversionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionHistoryGroupByArgs} args - Group by arguments.
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
      T extends ConversionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ConversionHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversionHistory model
   */
  readonly fields: ConversionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConversionHistory model
   */
  interface ConversionHistoryFieldRefs {
    readonly id: FieldRef<"ConversionHistory", 'Int'>
    readonly userId: FieldRef<"ConversionHistory", 'Int'>
    readonly totalJobs: FieldRef<"ConversionHistory", 'Int'>
    readonly successJobs: FieldRef<"ConversionHistory", 'Int'>
    readonly failedJobs: FieldRef<"ConversionHistory", 'Int'>
    readonly lastJobDate: FieldRef<"ConversionHistory", 'DateTime'>
    readonly createdAt: FieldRef<"ConversionHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ConversionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConversionHistory findUnique
   */
  export type ConversionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistory to fetch.
     */
    where: ConversionHistoryWhereUniqueInput
  }

  /**
   * ConversionHistory findUniqueOrThrow
   */
  export type ConversionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistory to fetch.
     */
    where: ConversionHistoryWhereUniqueInput
  }

  /**
   * ConversionHistory findFirst
   */
  export type ConversionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistory to fetch.
     */
    where?: ConversionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionHistories to fetch.
     */
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversionHistories.
     */
    cursor?: ConversionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversionHistories.
     */
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * ConversionHistory findFirstOrThrow
   */
  export type ConversionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistory to fetch.
     */
    where?: ConversionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionHistories to fetch.
     */
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversionHistories.
     */
    cursor?: ConversionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversionHistories.
     */
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * ConversionHistory findMany
   */
  export type ConversionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ConversionHistories to fetch.
     */
    where?: ConversionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversionHistories to fetch.
     */
    orderBy?: ConversionHistoryOrderByWithRelationInput | ConversionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversionHistories.
     */
    cursor?: ConversionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversionHistories.
     */
    skip?: number
    distinct?: ConversionHistoryScalarFieldEnum | ConversionHistoryScalarFieldEnum[]
  }

  /**
   * ConversionHistory create
   */
  export type ConversionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversionHistory.
     */
    data: XOR<ConversionHistoryCreateInput, ConversionHistoryUncheckedCreateInput>
  }

  /**
   * ConversionHistory createMany
   */
  export type ConversionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversionHistories.
     */
    data: ConversionHistoryCreateManyInput | ConversionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversionHistory createManyAndReturn
   */
  export type ConversionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ConversionHistories.
     */
    data: ConversionHistoryCreateManyInput | ConversionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversionHistory update
   */
  export type ConversionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversionHistory.
     */
    data: XOR<ConversionHistoryUpdateInput, ConversionHistoryUncheckedUpdateInput>
    /**
     * Choose, which ConversionHistory to update.
     */
    where: ConversionHistoryWhereUniqueInput
  }

  /**
   * ConversionHistory updateMany
   */
  export type ConversionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversionHistories.
     */
    data: XOR<ConversionHistoryUpdateManyMutationInput, ConversionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConversionHistories to update
     */
    where?: ConversionHistoryWhereInput
    /**
     * Limit how many ConversionHistories to update.
     */
    limit?: number
  }

  /**
   * ConversionHistory updateManyAndReturn
   */
  export type ConversionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ConversionHistories.
     */
    data: XOR<ConversionHistoryUpdateManyMutationInput, ConversionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConversionHistories to update
     */
    where?: ConversionHistoryWhereInput
    /**
     * Limit how many ConversionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversionHistory upsert
   */
  export type ConversionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversionHistory to update in case it exists.
     */
    where: ConversionHistoryWhereUniqueInput
    /**
     * In case the ConversionHistory found by the `where` argument doesn't exist, create a new ConversionHistory with this data.
     */
    create: XOR<ConversionHistoryCreateInput, ConversionHistoryUncheckedCreateInput>
    /**
     * In case the ConversionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversionHistoryUpdateInput, ConversionHistoryUncheckedUpdateInput>
  }

  /**
   * ConversionHistory delete
   */
  export type ConversionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
    /**
     * Filter which ConversionHistory to delete.
     */
    where: ConversionHistoryWhereUniqueInput
  }

  /**
   * ConversionHistory deleteMany
   */
  export type ConversionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionHistories to delete
     */
    where?: ConversionHistoryWhereInput
    /**
     * Limit how many ConversionHistories to delete.
     */
    limit?: number
  }

  /**
   * ConversionHistory without action
   */
  export type ConversionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionHistory
     */
    select?: ConversionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversionHistory
     */
    omit?: ConversionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversionHistoryInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expires: 'expires',
    blacklisted: 'blacklisted',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const ConversionJobScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    settings: 'settings',
    createdAt: 'createdAt',
    completedAt: 'completedAt',
    filename: 'filename',
    fileSize: 'fileSize',
    downloadUrl: 'downloadUrl',
    error: 'error'
  };

  export type ConversionJobScalarFieldEnum = (typeof ConversionJobScalarFieldEnum)[keyof typeof ConversionJobScalarFieldEnum]


  export const ConversionImageScalarFieldEnum: {
    id: 'id',
    conversionJobId: 'conversionJobId',
    originalName: 'originalName',
    fileName: 'fileName',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    width: 'width',
    height: 'height',
    storageUrl: 'storageUrl',
    createdAt: 'createdAt'
  };

  export type ConversionImageScalarFieldEnum = (typeof ConversionImageScalarFieldEnum)[keyof typeof ConversionImageScalarFieldEnum]


  export const ConversionHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalJobs: 'totalJobs',
    successJobs: 'successJobs',
    failedJobs: 'failedJobs',
    lastJobDate: 'lastJobDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversionHistoryScalarFieldEnum = (typeof ConversionHistoryScalarFieldEnum)[keyof typeof ConversionHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Token?: TokenListRelationFilter
    conversionJobs?: ConversionJobListRelationFilter
    conversionHistory?: XOR<ConversionHistoryNullableScalarRelationFilter, ConversionHistoryWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Token?: TokenOrderByRelationAggregateInput
    conversionJobs?: ConversionJobOrderByRelationAggregateInput
    conversionHistory?: ConversionHistoryOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Token?: TokenListRelationFilter
    conversionJobs?: ConversionJobListRelationFilter
    conversionHistory?: XOR<ConversionHistoryNullableScalarRelationFilter, ConversionHistoryWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    blacklisted?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: IntWithAggregatesFilter<"Token"> | number
  }

  export type ConversionJobWhereInput = {
    AND?: ConversionJobWhereInput | ConversionJobWhereInput[]
    OR?: ConversionJobWhereInput[]
    NOT?: ConversionJobWhereInput | ConversionJobWhereInput[]
    id?: StringFilter<"ConversionJob"> | string
    userId?: IntFilter<"ConversionJob"> | number
    status?: StringFilter<"ConversionJob"> | string
    settings?: JsonFilter<"ConversionJob">
    createdAt?: DateTimeFilter<"ConversionJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ConversionJob"> | Date | string | null
    filename?: StringNullableFilter<"ConversionJob"> | string | null
    fileSize?: IntNullableFilter<"ConversionJob"> | number | null
    downloadUrl?: StringNullableFilter<"ConversionJob"> | string | null
    error?: StringNullableFilter<"ConversionJob"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ConversionImageListRelationFilter
  }

  export type ConversionJobOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    downloadUrl?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    images?: ConversionImageOrderByRelationAggregateInput
  }

  export type ConversionJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversionJobWhereInput | ConversionJobWhereInput[]
    OR?: ConversionJobWhereInput[]
    NOT?: ConversionJobWhereInput | ConversionJobWhereInput[]
    userId?: IntFilter<"ConversionJob"> | number
    status?: StringFilter<"ConversionJob"> | string
    settings?: JsonFilter<"ConversionJob">
    createdAt?: DateTimeFilter<"ConversionJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ConversionJob"> | Date | string | null
    filename?: StringNullableFilter<"ConversionJob"> | string | null
    fileSize?: IntNullableFilter<"ConversionJob"> | number | null
    downloadUrl?: StringNullableFilter<"ConversionJob"> | string | null
    error?: StringNullableFilter<"ConversionJob"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    images?: ConversionImageListRelationFilter
  }, "id">

  export type ConversionJobOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    downloadUrl?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    _count?: ConversionJobCountOrderByAggregateInput
    _avg?: ConversionJobAvgOrderByAggregateInput
    _max?: ConversionJobMaxOrderByAggregateInput
    _min?: ConversionJobMinOrderByAggregateInput
    _sum?: ConversionJobSumOrderByAggregateInput
  }

  export type ConversionJobScalarWhereWithAggregatesInput = {
    AND?: ConversionJobScalarWhereWithAggregatesInput | ConversionJobScalarWhereWithAggregatesInput[]
    OR?: ConversionJobScalarWhereWithAggregatesInput[]
    NOT?: ConversionJobScalarWhereWithAggregatesInput | ConversionJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversionJob"> | string
    userId?: IntWithAggregatesFilter<"ConversionJob"> | number
    status?: StringWithAggregatesFilter<"ConversionJob"> | string
    settings?: JsonWithAggregatesFilter<"ConversionJob">
    createdAt?: DateTimeWithAggregatesFilter<"ConversionJob"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ConversionJob"> | Date | string | null
    filename?: StringNullableWithAggregatesFilter<"ConversionJob"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"ConversionJob"> | number | null
    downloadUrl?: StringNullableWithAggregatesFilter<"ConversionJob"> | string | null
    error?: StringNullableWithAggregatesFilter<"ConversionJob"> | string | null
  }

  export type ConversionImageWhereInput = {
    AND?: ConversionImageWhereInput | ConversionImageWhereInput[]
    OR?: ConversionImageWhereInput[]
    NOT?: ConversionImageWhereInput | ConversionImageWhereInput[]
    id?: StringFilter<"ConversionImage"> | string
    conversionJobId?: StringFilter<"ConversionImage"> | string
    originalName?: StringFilter<"ConversionImage"> | string
    fileName?: StringFilter<"ConversionImage"> | string
    fileSize?: IntFilter<"ConversionImage"> | number
    mimeType?: StringFilter<"ConversionImage"> | string
    width?: IntNullableFilter<"ConversionImage"> | number | null
    height?: IntNullableFilter<"ConversionImage"> | number | null
    storageUrl?: StringFilter<"ConversionImage"> | string
    createdAt?: DateTimeFilter<"ConversionImage"> | Date | string
    conversionJob?: XOR<ConversionJobScalarRelationFilter, ConversionJobWhereInput>
  }

  export type ConversionImageOrderByWithRelationInput = {
    id?: SortOrder
    conversionJobId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
    conversionJob?: ConversionJobOrderByWithRelationInput
  }

  export type ConversionImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversionImageWhereInput | ConversionImageWhereInput[]
    OR?: ConversionImageWhereInput[]
    NOT?: ConversionImageWhereInput | ConversionImageWhereInput[]
    conversionJobId?: StringFilter<"ConversionImage"> | string
    originalName?: StringFilter<"ConversionImage"> | string
    fileName?: StringFilter<"ConversionImage"> | string
    fileSize?: IntFilter<"ConversionImage"> | number
    mimeType?: StringFilter<"ConversionImage"> | string
    width?: IntNullableFilter<"ConversionImage"> | number | null
    height?: IntNullableFilter<"ConversionImage"> | number | null
    storageUrl?: StringFilter<"ConversionImage"> | string
    createdAt?: DateTimeFilter<"ConversionImage"> | Date | string
    conversionJob?: XOR<ConversionJobScalarRelationFilter, ConversionJobWhereInput>
  }, "id">

  export type ConversionImageOrderByWithAggregationInput = {
    id?: SortOrder
    conversionJobId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
    _count?: ConversionImageCountOrderByAggregateInput
    _avg?: ConversionImageAvgOrderByAggregateInput
    _max?: ConversionImageMaxOrderByAggregateInput
    _min?: ConversionImageMinOrderByAggregateInput
    _sum?: ConversionImageSumOrderByAggregateInput
  }

  export type ConversionImageScalarWhereWithAggregatesInput = {
    AND?: ConversionImageScalarWhereWithAggregatesInput | ConversionImageScalarWhereWithAggregatesInput[]
    OR?: ConversionImageScalarWhereWithAggregatesInput[]
    NOT?: ConversionImageScalarWhereWithAggregatesInput | ConversionImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversionImage"> | string
    conversionJobId?: StringWithAggregatesFilter<"ConversionImage"> | string
    originalName?: StringWithAggregatesFilter<"ConversionImage"> | string
    fileName?: StringWithAggregatesFilter<"ConversionImage"> | string
    fileSize?: IntWithAggregatesFilter<"ConversionImage"> | number
    mimeType?: StringWithAggregatesFilter<"ConversionImage"> | string
    width?: IntNullableWithAggregatesFilter<"ConversionImage"> | number | null
    height?: IntNullableWithAggregatesFilter<"ConversionImage"> | number | null
    storageUrl?: StringWithAggregatesFilter<"ConversionImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConversionImage"> | Date | string
  }

  export type ConversionHistoryWhereInput = {
    AND?: ConversionHistoryWhereInput | ConversionHistoryWhereInput[]
    OR?: ConversionHistoryWhereInput[]
    NOT?: ConversionHistoryWhereInput | ConversionHistoryWhereInput[]
    id?: IntFilter<"ConversionHistory"> | number
    userId?: IntFilter<"ConversionHistory"> | number
    totalJobs?: IntFilter<"ConversionHistory"> | number
    successJobs?: IntFilter<"ConversionHistory"> | number
    failedJobs?: IntFilter<"ConversionHistory"> | number
    lastJobDate?: DateTimeNullableFilter<"ConversionHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"ConversionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ConversionHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConversionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalJobs?: SortOrder
    successJobs?: SortOrder
    failedJobs?: SortOrder
    lastJobDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ConversionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ConversionHistoryWhereInput | ConversionHistoryWhereInput[]
    OR?: ConversionHistoryWhereInput[]
    NOT?: ConversionHistoryWhereInput | ConversionHistoryWhereInput[]
    totalJobs?: IntFilter<"ConversionHistory"> | number
    successJobs?: IntFilter<"ConversionHistory"> | number
    failedJobs?: IntFilter<"ConversionHistory"> | number
    lastJobDate?: DateTimeNullableFilter<"ConversionHistory"> | Date | string | null
    createdAt?: DateTimeFilter<"ConversionHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ConversionHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ConversionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalJobs?: SortOrder
    successJobs?: SortOrder
    failedJobs?: SortOrder
    lastJobDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversionHistoryCountOrderByAggregateInput
    _avg?: ConversionHistoryAvgOrderByAggregateInput
    _max?: ConversionHistoryMaxOrderByAggregateInput
    _min?: ConversionHistoryMinOrderByAggregateInput
    _sum?: ConversionHistorySumOrderByAggregateInput
  }

  export type ConversionHistoryScalarWhereWithAggregatesInput = {
    AND?: ConversionHistoryScalarWhereWithAggregatesInput | ConversionHistoryScalarWhereWithAggregatesInput[]
    OR?: ConversionHistoryScalarWhereWithAggregatesInput[]
    NOT?: ConversionHistoryScalarWhereWithAggregatesInput | ConversionHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConversionHistory"> | number
    userId?: IntWithAggregatesFilter<"ConversionHistory"> | number
    totalJobs?: IntWithAggregatesFilter<"ConversionHistory"> | number
    successJobs?: IntWithAggregatesFilter<"ConversionHistory"> | number
    failedJobs?: IntWithAggregatesFilter<"ConversionHistory"> | number
    lastJobDate?: DateTimeNullableWithAggregatesFilter<"ConversionHistory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ConversionHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConversionHistory"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    conversionJobs?: ConversionJobCreateNestedManyWithoutUserInput
    conversionHistory?: ConversionHistoryCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    conversionJobs?: ConversionJobUncheckedCreateNestedManyWithoutUserInput
    conversionHistory?: ConversionHistoryUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    conversionJobs?: ConversionJobUpdateManyWithoutUserNestedInput
    conversionHistory?: ConversionHistoryUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    conversionJobs?: ConversionJobUncheckedUpdateManyWithoutUserNestedInput
    conversionHistory?: ConversionHistoryUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversionJobCreateInput = {
    id?: string
    status?: string
    settings: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completedAt?: Date | string | null
    filename?: string | null
    fileSize?: number | null
    downloadUrl?: string | null
    error?: string | null
    user: UserCreateNestedOneWithoutConversionJobsInput
    images?: ConversionImageCreateNestedManyWithoutConversionJobInput
  }

  export type ConversionJobUncheckedCreateInput = {
    id?: string
    userId: number
    status?: string
    settings: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completedAt?: Date | string | null
    filename?: string | null
    fileSize?: number | null
    downloadUrl?: string | null
    error?: string | null
    images?: ConversionImageUncheckedCreateNestedManyWithoutConversionJobInput
  }

  export type ConversionJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutConversionJobsNestedInput
    images?: ConversionImageUpdateManyWithoutConversionJobNestedInput
  }

  export type ConversionJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ConversionImageUncheckedUpdateManyWithoutConversionJobNestedInput
  }

  export type ConversionJobCreateManyInput = {
    id?: string
    userId: number
    status?: string
    settings: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completedAt?: Date | string | null
    filename?: string | null
    fileSize?: number | null
    downloadUrl?: string | null
    error?: string | null
  }

  export type ConversionJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversionJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversionImageCreateInput = {
    id?: string
    originalName: string
    fileName: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    storageUrl: string
    createdAt?: Date | string
    conversionJob: ConversionJobCreateNestedOneWithoutImagesInput
  }

  export type ConversionImageUncheckedCreateInput = {
    id?: string
    conversionJobId: string
    originalName: string
    fileName: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    storageUrl: string
    createdAt?: Date | string
  }

  export type ConversionImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversionJob?: ConversionJobUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ConversionImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversionJobId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionImageCreateManyInput = {
    id?: string
    conversionJobId: string
    originalName: string
    fileName: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    storageUrl: string
    createdAt?: Date | string
  }

  export type ConversionImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversionJobId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryCreateInput = {
    totalJobs?: number
    successJobs?: number
    failedJobs?: number
    lastJobDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversionHistoryInput
  }

  export type ConversionHistoryUncheckedCreateInput = {
    id?: number
    userId: number
    totalJobs?: number
    successJobs?: number
    failedJobs?: number
    lastJobDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversionHistoryUpdateInput = {
    totalJobs?: IntFieldUpdateOperationsInput | number
    successJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    lastJobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversionHistoryNestedInput
  }

  export type ConversionHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalJobs?: IntFieldUpdateOperationsInput | number
    successJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    lastJobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryCreateManyInput = {
    id?: number
    userId: number
    totalJobs?: number
    successJobs?: number
    failedJobs?: number
    lastJobDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversionHistoryUpdateManyMutationInput = {
    totalJobs?: IntFieldUpdateOperationsInput | number
    successJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    lastJobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalJobs?: IntFieldUpdateOperationsInput | number
    successJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    lastJobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type ConversionJobListRelationFilter = {
    every?: ConversionJobWhereInput
    some?: ConversionJobWhereInput
    none?: ConversionJobWhereInput
  }

  export type ConversionHistoryNullableScalarRelationFilter = {
    is?: ConversionHistoryWhereInput | null
    isNot?: ConversionHistoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversionJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ConversionImageListRelationFilter = {
    every?: ConversionImageWhereInput
    some?: ConversionImageWhereInput
    none?: ConversionImageWhereInput
  }

  export type ConversionImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversionJobCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    filename?: SortOrder
    fileSize?: SortOrder
    downloadUrl?: SortOrder
    error?: SortOrder
  }

  export type ConversionJobAvgOrderByAggregateInput = {
    userId?: SortOrder
    fileSize?: SortOrder
  }

  export type ConversionJobMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    filename?: SortOrder
    fileSize?: SortOrder
    downloadUrl?: SortOrder
    error?: SortOrder
  }

  export type ConversionJobMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
    filename?: SortOrder
    fileSize?: SortOrder
    downloadUrl?: SortOrder
    error?: SortOrder
  }

  export type ConversionJobSumOrderByAggregateInput = {
    userId?: SortOrder
    fileSize?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ConversionJobScalarRelationFilter = {
    is?: ConversionJobWhereInput
    isNot?: ConversionJobWhereInput
  }

  export type ConversionImageCountOrderByAggregateInput = {
    id?: SortOrder
    conversionJobId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversionImageAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ConversionImageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversionJobId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversionImageMinOrderByAggregateInput = {
    id?: SortOrder
    conversionJobId?: SortOrder
    originalName?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    width?: SortOrder
    height?: SortOrder
    storageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversionImageSumOrderByAggregateInput = {
    fileSize?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ConversionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalJobs?: SortOrder
    successJobs?: SortOrder
    failedJobs?: SortOrder
    lastJobDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversionHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalJobs?: SortOrder
    successJobs?: SortOrder
    failedJobs?: SortOrder
  }

  export type ConversionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalJobs?: SortOrder
    successJobs?: SortOrder
    failedJobs?: SortOrder
    lastJobDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalJobs?: SortOrder
    successJobs?: SortOrder
    failedJobs?: SortOrder
    lastJobDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversionHistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalJobs?: SortOrder
    successJobs?: SortOrder
    failedJobs?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ConversionJobCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversionJobCreateWithoutUserInput, ConversionJobUncheckedCreateWithoutUserInput> | ConversionJobCreateWithoutUserInput[] | ConversionJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversionJobCreateOrConnectWithoutUserInput | ConversionJobCreateOrConnectWithoutUserInput[]
    createMany?: ConversionJobCreateManyUserInputEnvelope
    connect?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
  }

  export type ConversionHistoryCreateNestedOneWithoutUserInput = {
    create?: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutUserInput
    connect?: ConversionHistoryWhereUniqueInput
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ConversionJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversionJobCreateWithoutUserInput, ConversionJobUncheckedCreateWithoutUserInput> | ConversionJobCreateWithoutUserInput[] | ConversionJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversionJobCreateOrConnectWithoutUserInput | ConversionJobCreateOrConnectWithoutUserInput[]
    createMany?: ConversionJobCreateManyUserInputEnvelope
    connect?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
  }

  export type ConversionHistoryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutUserInput
    connect?: ConversionHistoryWhereUniqueInput
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ConversionJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversionJobCreateWithoutUserInput, ConversionJobUncheckedCreateWithoutUserInput> | ConversionJobCreateWithoutUserInput[] | ConversionJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversionJobCreateOrConnectWithoutUserInput | ConversionJobCreateOrConnectWithoutUserInput[]
    upsert?: ConversionJobUpsertWithWhereUniqueWithoutUserInput | ConversionJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversionJobCreateManyUserInputEnvelope
    set?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
    disconnect?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
    delete?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
    connect?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
    update?: ConversionJobUpdateWithWhereUniqueWithoutUserInput | ConversionJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversionJobUpdateManyWithWhereWithoutUserInput | ConversionJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversionJobScalarWhereInput | ConversionJobScalarWhereInput[]
  }

  export type ConversionHistoryUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutUserInput
    upsert?: ConversionHistoryUpsertWithoutUserInput
    disconnect?: ConversionHistoryWhereInput | boolean
    delete?: ConversionHistoryWhereInput | boolean
    connect?: ConversionHistoryWhereUniqueInput
    update?: XOR<XOR<ConversionHistoryUpdateToOneWithWhereWithoutUserInput, ConversionHistoryUpdateWithoutUserInput>, ConversionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ConversionJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversionJobCreateWithoutUserInput, ConversionJobUncheckedCreateWithoutUserInput> | ConversionJobCreateWithoutUserInput[] | ConversionJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversionJobCreateOrConnectWithoutUserInput | ConversionJobCreateOrConnectWithoutUserInput[]
    upsert?: ConversionJobUpsertWithWhereUniqueWithoutUserInput | ConversionJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversionJobCreateManyUserInputEnvelope
    set?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
    disconnect?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
    delete?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
    connect?: ConversionJobWhereUniqueInput | ConversionJobWhereUniqueInput[]
    update?: ConversionJobUpdateWithWhereUniqueWithoutUserInput | ConversionJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversionJobUpdateManyWithWhereWithoutUserInput | ConversionJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversionJobScalarWhereInput | ConversionJobScalarWhereInput[]
  }

  export type ConversionHistoryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: ConversionHistoryCreateOrConnectWithoutUserInput
    upsert?: ConversionHistoryUpsertWithoutUserInput
    disconnect?: ConversionHistoryWhereInput | boolean
    delete?: ConversionHistoryWhereInput | boolean
    connect?: ConversionHistoryWhereUniqueInput
    update?: XOR<XOR<ConversionHistoryUpdateToOneWithWhereWithoutUserInput, ConversionHistoryUpdateWithoutUserInput>, ConversionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserCreateNestedOneWithoutConversionJobsInput = {
    create?: XOR<UserCreateWithoutConversionJobsInput, UserUncheckedCreateWithoutConversionJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversionJobsInput
    connect?: UserWhereUniqueInput
  }

  export type ConversionImageCreateNestedManyWithoutConversionJobInput = {
    create?: XOR<ConversionImageCreateWithoutConversionJobInput, ConversionImageUncheckedCreateWithoutConversionJobInput> | ConversionImageCreateWithoutConversionJobInput[] | ConversionImageUncheckedCreateWithoutConversionJobInput[]
    connectOrCreate?: ConversionImageCreateOrConnectWithoutConversionJobInput | ConversionImageCreateOrConnectWithoutConversionJobInput[]
    createMany?: ConversionImageCreateManyConversionJobInputEnvelope
    connect?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
  }

  export type ConversionImageUncheckedCreateNestedManyWithoutConversionJobInput = {
    create?: XOR<ConversionImageCreateWithoutConversionJobInput, ConversionImageUncheckedCreateWithoutConversionJobInput> | ConversionImageCreateWithoutConversionJobInput[] | ConversionImageUncheckedCreateWithoutConversionJobInput[]
    connectOrCreate?: ConversionImageCreateOrConnectWithoutConversionJobInput | ConversionImageCreateOrConnectWithoutConversionJobInput[]
    createMany?: ConversionImageCreateManyConversionJobInputEnvelope
    connect?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutConversionJobsNestedInput = {
    create?: XOR<UserCreateWithoutConversionJobsInput, UserUncheckedCreateWithoutConversionJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversionJobsInput
    upsert?: UserUpsertWithoutConversionJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversionJobsInput, UserUpdateWithoutConversionJobsInput>, UserUncheckedUpdateWithoutConversionJobsInput>
  }

  export type ConversionImageUpdateManyWithoutConversionJobNestedInput = {
    create?: XOR<ConversionImageCreateWithoutConversionJobInput, ConversionImageUncheckedCreateWithoutConversionJobInput> | ConversionImageCreateWithoutConversionJobInput[] | ConversionImageUncheckedCreateWithoutConversionJobInput[]
    connectOrCreate?: ConversionImageCreateOrConnectWithoutConversionJobInput | ConversionImageCreateOrConnectWithoutConversionJobInput[]
    upsert?: ConversionImageUpsertWithWhereUniqueWithoutConversionJobInput | ConversionImageUpsertWithWhereUniqueWithoutConversionJobInput[]
    createMany?: ConversionImageCreateManyConversionJobInputEnvelope
    set?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
    disconnect?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
    delete?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
    connect?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
    update?: ConversionImageUpdateWithWhereUniqueWithoutConversionJobInput | ConversionImageUpdateWithWhereUniqueWithoutConversionJobInput[]
    updateMany?: ConversionImageUpdateManyWithWhereWithoutConversionJobInput | ConversionImageUpdateManyWithWhereWithoutConversionJobInput[]
    deleteMany?: ConversionImageScalarWhereInput | ConversionImageScalarWhereInput[]
  }

  export type ConversionImageUncheckedUpdateManyWithoutConversionJobNestedInput = {
    create?: XOR<ConversionImageCreateWithoutConversionJobInput, ConversionImageUncheckedCreateWithoutConversionJobInput> | ConversionImageCreateWithoutConversionJobInput[] | ConversionImageUncheckedCreateWithoutConversionJobInput[]
    connectOrCreate?: ConversionImageCreateOrConnectWithoutConversionJobInput | ConversionImageCreateOrConnectWithoutConversionJobInput[]
    upsert?: ConversionImageUpsertWithWhereUniqueWithoutConversionJobInput | ConversionImageUpsertWithWhereUniqueWithoutConversionJobInput[]
    createMany?: ConversionImageCreateManyConversionJobInputEnvelope
    set?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
    disconnect?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
    delete?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
    connect?: ConversionImageWhereUniqueInput | ConversionImageWhereUniqueInput[]
    update?: ConversionImageUpdateWithWhereUniqueWithoutConversionJobInput | ConversionImageUpdateWithWhereUniqueWithoutConversionJobInput[]
    updateMany?: ConversionImageUpdateManyWithWhereWithoutConversionJobInput | ConversionImageUpdateManyWithWhereWithoutConversionJobInput[]
    deleteMany?: ConversionImageScalarWhereInput | ConversionImageScalarWhereInput[]
  }

  export type ConversionJobCreateNestedOneWithoutImagesInput = {
    create?: XOR<ConversionJobCreateWithoutImagesInput, ConversionJobUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ConversionJobCreateOrConnectWithoutImagesInput
    connect?: ConversionJobWhereUniqueInput
  }

  export type ConversionJobUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ConversionJobCreateWithoutImagesInput, ConversionJobUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ConversionJobCreateOrConnectWithoutImagesInput
    upsert?: ConversionJobUpsertWithoutImagesInput
    connect?: ConversionJobWhereUniqueInput
    update?: XOR<XOR<ConversionJobUpdateToOneWithWhereWithoutImagesInput, ConversionJobUpdateWithoutImagesInput>, ConversionJobUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutConversionHistoryInput = {
    create?: XOR<UserCreateWithoutConversionHistoryInput, UserUncheckedCreateWithoutConversionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversionHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConversionHistoryNestedInput = {
    create?: XOR<UserCreateWithoutConversionHistoryInput, UserUncheckedCreateWithoutConversionHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversionHistoryInput
    upsert?: UserUpsertWithoutConversionHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversionHistoryInput, UserUpdateWithoutConversionHistoryInput>, UserUncheckedUpdateWithoutConversionHistoryInput>
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

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversionJobCreateWithoutUserInput = {
    id?: string
    status?: string
    settings: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completedAt?: Date | string | null
    filename?: string | null
    fileSize?: number | null
    downloadUrl?: string | null
    error?: string | null
    images?: ConversionImageCreateNestedManyWithoutConversionJobInput
  }

  export type ConversionJobUncheckedCreateWithoutUserInput = {
    id?: string
    status?: string
    settings: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completedAt?: Date | string | null
    filename?: string | null
    fileSize?: number | null
    downloadUrl?: string | null
    error?: string | null
    images?: ConversionImageUncheckedCreateNestedManyWithoutConversionJobInput
  }

  export type ConversionJobCreateOrConnectWithoutUserInput = {
    where: ConversionJobWhereUniqueInput
    create: XOR<ConversionJobCreateWithoutUserInput, ConversionJobUncheckedCreateWithoutUserInput>
  }

  export type ConversionJobCreateManyUserInputEnvelope = {
    data: ConversionJobCreateManyUserInput | ConversionJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversionHistoryCreateWithoutUserInput = {
    totalJobs?: number
    successJobs?: number
    failedJobs?: number
    lastJobDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversionHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    totalJobs?: number
    successJobs?: number
    failedJobs?: number
    lastJobDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversionHistoryCreateOrConnectWithoutUserInput = {
    where: ConversionHistoryWhereUniqueInput
    create: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput>
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
  }

  export type ConversionJobUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversionJobWhereUniqueInput
    update: XOR<ConversionJobUpdateWithoutUserInput, ConversionJobUncheckedUpdateWithoutUserInput>
    create: XOR<ConversionJobCreateWithoutUserInput, ConversionJobUncheckedCreateWithoutUserInput>
  }

  export type ConversionJobUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversionJobWhereUniqueInput
    data: XOR<ConversionJobUpdateWithoutUserInput, ConversionJobUncheckedUpdateWithoutUserInput>
  }

  export type ConversionJobUpdateManyWithWhereWithoutUserInput = {
    where: ConversionJobScalarWhereInput
    data: XOR<ConversionJobUpdateManyMutationInput, ConversionJobUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversionJobScalarWhereInput = {
    AND?: ConversionJobScalarWhereInput | ConversionJobScalarWhereInput[]
    OR?: ConversionJobScalarWhereInput[]
    NOT?: ConversionJobScalarWhereInput | ConversionJobScalarWhereInput[]
    id?: StringFilter<"ConversionJob"> | string
    userId?: IntFilter<"ConversionJob"> | number
    status?: StringFilter<"ConversionJob"> | string
    settings?: JsonFilter<"ConversionJob">
    createdAt?: DateTimeFilter<"ConversionJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ConversionJob"> | Date | string | null
    filename?: StringNullableFilter<"ConversionJob"> | string | null
    fileSize?: IntNullableFilter<"ConversionJob"> | number | null
    downloadUrl?: StringNullableFilter<"ConversionJob"> | string | null
    error?: StringNullableFilter<"ConversionJob"> | string | null
  }

  export type ConversionHistoryUpsertWithoutUserInput = {
    update: XOR<ConversionHistoryUpdateWithoutUserInput, ConversionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ConversionHistoryCreateWithoutUserInput, ConversionHistoryUncheckedCreateWithoutUserInput>
    where?: ConversionHistoryWhereInput
  }

  export type ConversionHistoryUpdateToOneWithWhereWithoutUserInput = {
    where?: ConversionHistoryWhereInput
    data: XOR<ConversionHistoryUpdateWithoutUserInput, ConversionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ConversionHistoryUpdateWithoutUserInput = {
    totalJobs?: IntFieldUpdateOperationsInput | number
    successJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    lastJobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalJobs?: IntFieldUpdateOperationsInput | number
    successJobs?: IntFieldUpdateOperationsInput | number
    failedJobs?: IntFieldUpdateOperationsInput | number
    lastJobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTokenInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    conversionJobs?: ConversionJobCreateNestedManyWithoutUserInput
    conversionHistory?: ConversionHistoryCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    conversionJobs?: ConversionJobUncheckedCreateNestedManyWithoutUserInput
    conversionHistory?: ConversionHistoryUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversionJobs?: ConversionJobUpdateManyWithoutUserNestedInput
    conversionHistory?: ConversionHistoryUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversionJobs?: ConversionJobUncheckedUpdateManyWithoutUserNestedInput
    conversionHistory?: ConversionHistoryUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutConversionJobsInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    conversionHistory?: ConversionHistoryCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversionJobsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    conversionHistory?: ConversionHistoryUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversionJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversionJobsInput, UserUncheckedCreateWithoutConversionJobsInput>
  }

  export type ConversionImageCreateWithoutConversionJobInput = {
    id?: string
    originalName: string
    fileName: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    storageUrl: string
    createdAt?: Date | string
  }

  export type ConversionImageUncheckedCreateWithoutConversionJobInput = {
    id?: string
    originalName: string
    fileName: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    storageUrl: string
    createdAt?: Date | string
  }

  export type ConversionImageCreateOrConnectWithoutConversionJobInput = {
    where: ConversionImageWhereUniqueInput
    create: XOR<ConversionImageCreateWithoutConversionJobInput, ConversionImageUncheckedCreateWithoutConversionJobInput>
  }

  export type ConversionImageCreateManyConversionJobInputEnvelope = {
    data: ConversionImageCreateManyConversionJobInput | ConversionImageCreateManyConversionJobInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConversionJobsInput = {
    update: XOR<UserUpdateWithoutConversionJobsInput, UserUncheckedUpdateWithoutConversionJobsInput>
    create: XOR<UserCreateWithoutConversionJobsInput, UserUncheckedCreateWithoutConversionJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversionJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversionJobsInput, UserUncheckedUpdateWithoutConversionJobsInput>
  }

  export type UserUpdateWithoutConversionJobsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    conversionHistory?: ConversionHistoryUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversionJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    conversionHistory?: ConversionHistoryUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ConversionImageUpsertWithWhereUniqueWithoutConversionJobInput = {
    where: ConversionImageWhereUniqueInput
    update: XOR<ConversionImageUpdateWithoutConversionJobInput, ConversionImageUncheckedUpdateWithoutConversionJobInput>
    create: XOR<ConversionImageCreateWithoutConversionJobInput, ConversionImageUncheckedCreateWithoutConversionJobInput>
  }

  export type ConversionImageUpdateWithWhereUniqueWithoutConversionJobInput = {
    where: ConversionImageWhereUniqueInput
    data: XOR<ConversionImageUpdateWithoutConversionJobInput, ConversionImageUncheckedUpdateWithoutConversionJobInput>
  }

  export type ConversionImageUpdateManyWithWhereWithoutConversionJobInput = {
    where: ConversionImageScalarWhereInput
    data: XOR<ConversionImageUpdateManyMutationInput, ConversionImageUncheckedUpdateManyWithoutConversionJobInput>
  }

  export type ConversionImageScalarWhereInput = {
    AND?: ConversionImageScalarWhereInput | ConversionImageScalarWhereInput[]
    OR?: ConversionImageScalarWhereInput[]
    NOT?: ConversionImageScalarWhereInput | ConversionImageScalarWhereInput[]
    id?: StringFilter<"ConversionImage"> | string
    conversionJobId?: StringFilter<"ConversionImage"> | string
    originalName?: StringFilter<"ConversionImage"> | string
    fileName?: StringFilter<"ConversionImage"> | string
    fileSize?: IntFilter<"ConversionImage"> | number
    mimeType?: StringFilter<"ConversionImage"> | string
    width?: IntNullableFilter<"ConversionImage"> | number | null
    height?: IntNullableFilter<"ConversionImage"> | number | null
    storageUrl?: StringFilter<"ConversionImage"> | string
    createdAt?: DateTimeFilter<"ConversionImage"> | Date | string
  }

  export type ConversionJobCreateWithoutImagesInput = {
    id?: string
    status?: string
    settings: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completedAt?: Date | string | null
    filename?: string | null
    fileSize?: number | null
    downloadUrl?: string | null
    error?: string | null
    user: UserCreateNestedOneWithoutConversionJobsInput
  }

  export type ConversionJobUncheckedCreateWithoutImagesInput = {
    id?: string
    userId: number
    status?: string
    settings: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completedAt?: Date | string | null
    filename?: string | null
    fileSize?: number | null
    downloadUrl?: string | null
    error?: string | null
  }

  export type ConversionJobCreateOrConnectWithoutImagesInput = {
    where: ConversionJobWhereUniqueInput
    create: XOR<ConversionJobCreateWithoutImagesInput, ConversionJobUncheckedCreateWithoutImagesInput>
  }

  export type ConversionJobUpsertWithoutImagesInput = {
    update: XOR<ConversionJobUpdateWithoutImagesInput, ConversionJobUncheckedUpdateWithoutImagesInput>
    create: XOR<ConversionJobCreateWithoutImagesInput, ConversionJobUncheckedCreateWithoutImagesInput>
    where?: ConversionJobWhereInput
  }

  export type ConversionJobUpdateToOneWithWhereWithoutImagesInput = {
    where?: ConversionJobWhereInput
    data: XOR<ConversionJobUpdateWithoutImagesInput, ConversionJobUncheckedUpdateWithoutImagesInput>
  }

  export type ConversionJobUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutConversionJobsNestedInput
  }

  export type ConversionJobUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutConversionHistoryInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    conversionJobs?: ConversionJobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversionHistoryInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    conversionJobs?: ConversionJobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversionHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversionHistoryInput, UserUncheckedCreateWithoutConversionHistoryInput>
  }

  export type UserUpsertWithoutConversionHistoryInput = {
    update: XOR<UserUpdateWithoutConversionHistoryInput, UserUncheckedUpdateWithoutConversionHistoryInput>
    create: XOR<UserCreateWithoutConversionHistoryInput, UserUncheckedCreateWithoutConversionHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversionHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversionHistoryInput, UserUncheckedUpdateWithoutConversionHistoryInput>
  }

  export type UserUpdateWithoutConversionHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    conversionJobs?: ConversionJobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversionHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    conversionJobs?: ConversionJobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type ConversionJobCreateManyUserInput = {
    id?: string
    status?: string
    settings: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    completedAt?: Date | string | null
    filename?: string | null
    fileSize?: number | null
    downloadUrl?: string | null
    error?: string | null
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionJobUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ConversionImageUpdateManyWithoutConversionJobNestedInput
  }

  export type ConversionJobUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ConversionImageUncheckedUpdateManyWithoutConversionJobNestedInput
  }

  export type ConversionJobUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    downloadUrl?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversionImageCreateManyConversionJobInput = {
    id?: string
    originalName: string
    fileName: string
    fileSize: number
    mimeType: string
    width?: number | null
    height?: number | null
    storageUrl: string
    createdAt?: Date | string
  }

  export type ConversionImageUpdateWithoutConversionJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionImageUncheckedUpdateWithoutConversionJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversionImageUncheckedUpdateManyWithoutConversionJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    storageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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