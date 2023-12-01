# built-in(내장) module

1. path
2. event : 시스템간 발생하는 이벤트( 파일읽거나 쓰거나 지우거나 종료 )
3. fileSystem
4. http

# 이벤트

특정 동작이 발생할 때 특정함수나 callback 등 분기 처리를 할 수 있는 기능

# EventEmitter 모듈: 이벤트 사용하기위한 클래스

데이터를 전달하는 방식으로 사용자 제어와 달리
노드는 대부분의 이벤트를 비동기 방식으로 처리한다.
비동기 방식으로 처리하기 위해서 서로 이벤트를 전달하는데
예를 들어 함수 실행 결과물도 이벤트로 전달한다.
노드는 이러한 이벤트를 사용하기 위해 EventEmitter가 만들어져 있다.

| 메소드                              | 설명                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| on(event, listener)                 | 지정한 이벤트의 리스너를 추가                                                  |
| addListener(event, listener)        | 지정한 이벤트의 리스너를 추가                                                  |
| emit(event)                         | 사용자가 지정한 이벤트 발생, on에 등록된 이벤트 실행시킴                       |
| once(event, listener)               | 지정한 이벤트의 리스너를 추가하지만 한 번 실행한 후 자동으로 리스너가 제거된다 |
| remove(event, listener)             | 지정한 이벤트의 리스너를 제거 , 버전에 따라 다를 수 있음                       |
| removeAllListeners(event, listener) | 지정한 모든 이벤트의 리스너 제거                                               |
| removeListeners(event, listener)    | 지정한 이벤트의 리스너를 제거                                                  |
| off(event, listener)                | 지정한 이벤트의 리스너를 제거                                                  |
| listenerCount(event)                | 현재 연결된 이벤트 리스너 개수 확인                                            |
