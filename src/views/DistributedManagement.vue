<template>
    <div class="content">
        <Decoration5 style="width:1000px; height:40px;margin:0 auto" />
        <div class="wrap">        
            <div>
                <div class="subtitle">可选数据集</div>
                <Decoration8 class="decoration"></Decoration8>
                <table style="color: white;margin-top: 20px" width="800">
                    <thead>
                        <th>数据集名称</th>
                        <th>数据集描述</th>
                        <th>数据集状态</th>
                        <th>已标注/样本数量</th>
                        <th>标签种类</th>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in availableDataset" :key="index"  height="50">
                            <td>
                                {{ item.name }}
                            </td>
                            <td>
                                {{ item.description }}
                            </td>
                            <td>
                                {{ item.state }}
                            </td>
                            <td>
                                {{ item.num }}
                            </td>
                            <td>
                                {{ item.type }}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="subtitle">训练列表</div>
                <Decoration8 class="decoration"></Decoration8>

                <table style="color: white;margin-top: 20px" width="800">
                    <thead>
                        <th>训练名称</th>
                        <th>训练描述</th>
                        <th>训练状态</th>
                        <th>训练数据集</th>
                        <th>操作</th>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in traningList" :key="index"  height="50">
                            <td>
                                {{ item.name }}
                            </td>
                            <td>
                                {{ item.description }}
                            </td>
                            <td>
                                {{ item.state }}
                            </td>
                            <td>
                                {{ item.dataset }}
                            </td>
                            <td>
                                <i @click="inspectDetail">详情</i>   <i>删除</i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>   
            
            <div>
                <BorderBox11 style="width: 400px;height: 700px;padding-top: 15px;">

                    <div class="dataset">新建训练</div>

                    <div>
                        <div class="input">
                            <div class="name">训练名称</div>
                            <input type="text" v-model="trainData.name" placeholder="训练名称">
                        </div>
                        <div class="input">
                            <div class="name">训练描述</div>
                            <input type="text" v-model="trainData.description" placeholder="训练描述">
                        </div>
                        <div class="input">
                            <div class="name">训练方式</div>
                            <input type="text" v-model="trainData.method" placeholder="训练方式">
                        </div>
                        <div class="input">
                            <div class="name">数据集选择</div>
                            <input type="text" v-model="trainData.dataset" placeholder="训练名称">
                        </div>
                        <div class="input">
                            <div class="name">模型选择</div>
                            <input type="text" v-model="trainData.model" placeholder="训练名称">
                        </div>
                        <div class="input">
                            <div class="name">验证集比例</div>
                            <input type="text" v-model="trainData.proportion" placeholder="训练名称">
                        </div>

                        <div class="btn-group">
                            <el-button class="button" type="primary" @click="createTraining">创建</el-button>
                            <el-button class="button" type="plain">取消</el-button>
                        </div>
                    </div>
                </BorderBox11>
            </div>   
        </div>
        
        <div class="popup" v-if="isShow" >
            <div style="font-size: 30px;font-weight: 700;">训练结果</div>
            <div style="margin-top: 20px">本次训练已完成，各参数结果如下：</div>
            <div style="width: max-content;margin: 10px auto;text-align: left;">
                <div style="margin-top: 5px" >正确率(Acc): {{ trainResult.acc }}</div>
                <div style="margin-top: 5px">F1分数(f1_macro): {{ trainResult.f1 }}</div>
                <div style="margin-top: 5px">查准率(precision_macro): {{ trainResult.precision }}</div>
                <div style="margin-top: 5px">查全率(recall_macro): {{ trainResult.recall }}</div>
            </div>
            <div class="btn-group">
                <el-button class="button" type="primary" @click="createTraining">重新训练</el-button>
                <el-button class="button" type="plain" @click="isShow=false">关闭</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { 
    // BorderBox1,
    //  BorderBox10,
    Decoration8, 
     Decoration5, BorderBox11 } from '@dataview/datav-vue3';
import { getTraining } from '@/api/training';

export default {
    name: 'HomeIndex',
    data() {
        return {
            isShow: false,
            trainData: {
                name: '',
                description: '',
                method: '',
                dataset: '',
                model: '',
                proportion: '',
                isShow: true
            },
            trainResult: {
                acc: 0.9935,
                f1: 0.9524,
                precision: 0.9670,
                recall: 0.9768
            },
            availableDataset: [
                {
                    name: '数据集1',
                    description: '初始数据集',
                    state: '正常',
                    num: '200/200',
                    type: 'xxxxxxxxxx'
                },
                {
                    name: '数据集2',
                    description: '新增数据集',
                    state: '正常',
                    num: '200/200',
                    type: 'xxxxxxxxxx'
                },
                {
                    name: '数据集3',
                    description: '新增数据集',
                    state: '正常',
                    num: '200/200',
                    type: 'xxxxxxxxxx'
                },
                {
                    name: '数据集4',
                    description: '新增数据集',
                    state: '正常',
                    num: '200/200',
                    type: 'xxxxxxxxxx'
                }
            ],
            traningList: [
                {
                    name: '模型训练1',
                    description: '异常行为检测',
                    state: '正常',
                    dataset: '数据集1'
                },
                {
                    name: '模型训练2',
                    description: '物体检测',
                    state: '正常',
                    dataset: '数据集2'
                }
            ]
        }
    },
    components: { 
        Decoration5, 
        // BorderBox1, 
        // BorderBox10,
        Decoration8,
        BorderBox11
    },
    created() {
        this.getTrainingData()
    },
    methods: {
        createTraining() {

        },
        inspectDetail() {
            this.isShow = true
        },
        async getTrainingData() {
            let res = await getTraining();
            console.log(res.data)
        }
    }
}
</script>

<style scoped>
    .content {
        background-image: url(../assets/background.webp);
        height: 1000px;
        background-size: contain;
        background-repeat: no-repeat;
        padding-top: 40px;
        padding-left: 50px;
        padding-right: 50px;
    }
    .button {
        width: 80px;
    }
    .popup {
        position: fixed;
        padding-top: 30px;
        box-sizing: border-box;
        top: 300px;
        left: 50%;
        transform: translate(-50%);
        width: 600px;
        height: 300px;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
    }
    .title {
        font-size: 35px;
        font-weight: 700;
        color: white;
    }
    .subtitle {
        text-align: left;
        font-size: 20px;
        margin-left: 60px;
        color: white;
    }

    .dataset {
        font-size: 20px;
        color: white;
    }
    .wrap {
        display: flex;
        justify-content: space-between;
    }

    .name {
        color: white;
        text-align: left;
        margin-left: 50px;
    }
    input {
        background:rgba(255,255,255,0) ;
        border: 1px solid white;
        border-radius: 5px;
        height: 35px;
        padding-left: 20px;
        margin-top: 10px;
        margin-left: -55px;
        width: 250px;
        box-sizing: border-box;
        color: white;
    }

    .input {
        margin-top: 25px;
        
    }

    .btn-group {
        margin-top: 25px;
        margin-left: -20px;
    }

    .decoration {
        color: white;
        height: 30px;
        width: 1000px;
    }

    table {
        border-bottom: 1px solid rgba(172, 172, 172, 0.3);
    }
</style>

