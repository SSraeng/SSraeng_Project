def answer_request_dto(result):
    return {"name":result['name'], "answers":result['answers'], 
        "times":result['times'], "delivery_count": result['delivery_count']
    }