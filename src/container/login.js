import { Form, Input, Button, Checkbox } from 'antd';
import {loginUser} from '../module/user/userFunction'
import {connect} from 'react-redux';
const Login = (props) => {
  const onFinish = (values) => {
    const params = new URLSearchParams();
    params.append('username', values.username);
    params.append('password', values.password);

    props.loginUser(params)
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      style={{paddingTop: '200px'}}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

function mapStateToProps(state) {
    return { user: state.user }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        loginUser: (params) => dispatch (loginUser(params))
    }
    
  }


export default connect(mapStateToProps, mapDispatchToProps)(Login);