/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface ChallengeFactoryInterface extends ethers.utils.Interface {
  functions: {
    'beacon()': FunctionFragment
    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)': FunctionFragment
    'executors(uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'beacon', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'createChallenge',
    values: [
      string,
      BytesLike,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'executors',
    values: [BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: 'beacon', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'createChallenge',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'executors', data: BytesLike): Result

  events: {}
}

export class ChallengeFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ChallengeFactoryInterface

  functions: {
    beacon(overrides?: CallOverrides): Promise<[string]>

    'beacon()'(overrides?: CallOverrides): Promise<[string]>

    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    'executors(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>
  }

  beacon(overrides?: CallOverrides): Promise<string>

  'beacon()'(overrides?: CallOverrides): Promise<string>

  createChallenge(
    _resultReceiver: string,
    _executionHash: BytesLike,
    _maxMessageCount: BigNumberish,
    _asserter: string,
    _challenger: string,
    _asserterTimeLeft: BigNumberish,
    _challengerTimeLeft: BigNumberish,
    _sequencerBridge: string,
    _delayedBridge: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
    _resultReceiver: string,
    _executionHash: BytesLike,
    _maxMessageCount: BigNumberish,
    _asserter: string,
    _challenger: string,
    _asserterTimeLeft: BigNumberish,
    _challengerTimeLeft: BigNumberish,
    _sequencerBridge: string,
    _delayedBridge: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  'executors(uint256)'(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>

  callStatic: {
    beacon(overrides?: CallOverrides): Promise<string>

    'beacon()'(overrides?: CallOverrides): Promise<string>

    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: CallOverrides
    ): Promise<string>

    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: CallOverrides
    ): Promise<string>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    'executors(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    beacon(overrides?: CallOverrides): Promise<BigNumber>

    'beacon()'(overrides?: CallOverrides): Promise<BigNumber>

    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'executors(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    beacon(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'beacon()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)'(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    executors(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'executors(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
