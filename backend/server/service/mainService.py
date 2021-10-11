from domain.dao.userDao import all_user


def get_main_result():
    user_cnt = len(all_user())
    result = {
        'user_cnt':user_cnt
    }

    return result