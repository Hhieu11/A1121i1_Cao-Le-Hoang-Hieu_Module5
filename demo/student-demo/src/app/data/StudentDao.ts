import {IStudent} from '../istudent';

export class StudentDao {
  static student:IStudent[]=[
    // {id: 1,
    // name: 'Hieu1',
    // mark: 7,
    // image: 'data:image/jpeg;base64,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'},
    // {id: 2,
    //   name: 'Hieu2',
    //   mark: 3,
    //   image: 'data:image/jpeg;base64,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'},
    // {id: 3,
    //   name: 'Hieu3',
    //   mark: 6,
    //   image: 'data:image/jpeg;base64,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'},
    // {id: 4,
    //   name: 'Hieu4',
    //   mark: 10,
    //   image: 'data:image/jpeg;base64,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'}

    ]
static getAllList(){
    return this.student
}

}
