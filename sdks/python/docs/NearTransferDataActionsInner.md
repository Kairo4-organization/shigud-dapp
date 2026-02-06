# NearTransferDataActionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**amount** | **str** |  | [optional] 
**method_name** | **str** |  | [optional] 
**args** | **str** |  | [optional] 
**gas** | **str** |  | [optional] 
**deposit** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.near_transfer_data_actions_inner import NearTransferDataActionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NearTransferDataActionsInner from a JSON string
near_transfer_data_actions_inner_instance = NearTransferDataActionsInner.from_json(json)
# print the JSON string representation of the object
print(NearTransferDataActionsInner.to_json())

# convert the object into a dict
near_transfer_data_actions_inner_dict = near_transfer_data_actions_inner_instance.to_dict()
# create an instance of NearTransferDataActionsInner from a dict
near_transfer_data_actions_inner_from_dict = NearTransferDataActionsInner.from_dict(near_transfer_data_actions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


